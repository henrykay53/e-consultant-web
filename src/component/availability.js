import { company } from "../siteConfig";

/**
 * Opening hours, derived entirely from `company.hours`.
 *
 * The live "answering calls now" badge depends on this being right: showing
 * "open" when nobody will pick up is worse than showing nothing.
 */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const FULL_DAY = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** "08:00" -> "8am", "17:30" -> "5:30pm" */
export const formatTime = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
};

/** Runs of consecutive open days that share the same hours. */
export const hourGroups = () => {
  const groups = [];
  for (const day of DAYS) {
    const hours = company.hours[day] ?? null;
    const last = groups[groups.length - 1];
    if (last && JSON.stringify(last.hours) === JSON.stringify(hours)) {
      last.days.push(day);
    } else {
      groups.push({ days: [day], hours });
    }
  }
  return groups.filter((g) => g.hours);
};

/** "Mon – Sat, 8am – 5pm", or "Monday – Saturday, 8am – 5pm" with long. */
export const hoursSummary = ({ long = false } = {}) =>
  hourGroups()
    .map(({ days, hours }) => {
      const name = (d) => (long ? FULL_DAY[d] : d);
      const range =
        days.length === 1 ? name(days[0]) : `${name(days[0])} – ${name(days.at(-1))}`;
      return `${range}, ${formatTime(hours[0])} – ${formatTime(hours[1])}`;
    })
    .join(" · ");

/** Current weekday and minutes past midnight in Lagos. */
export const lagosNow = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    weekday: get("weekday") ?? "Mon",
    minutes: Number(get("hour") ?? 12) * 60 + Number(get("minute") ?? 0),
  };
};

export const isOpenNow = (date = new Date()) => {
  const { weekday, minutes } = lagosNow(date);
  const hours = company.hours[weekday];
  return Boolean(hours) && minutes >= toMinutes(hours[0]) && minutes < toMinutes(hours[1]);
};

/** Schema.org openingHoursSpecification for the business structured data. */
export const openingHoursSpecification = () =>
  hourGroups().map(({ days, hours }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: days.map((d) => FULL_DAY[d]),
    opens: hours[0],
    closes: hours[1],
  }));
