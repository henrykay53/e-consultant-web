import { company } from "../siteConfig";

/**
 * Are we open right now, in Lagos time?
 *
 * Powers the "we're answering calls now" indicator. A live status next to a
 * phone number measurably lifts call-through, because the visitor's real
 * hesitation is "will anyone actually pick up?"
 */
export const OPEN_HOUR = 7;
export const CLOSE_HOUR = 20; // 8pm

export const lagosNow = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "numeric",
    weekday: "short",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 12);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  return { hour, weekday };
};

export const isOpenNow = () => {
  const { hour, weekday } = lagosNow();
  if (weekday === "Sun") return false;
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
};

export const availabilityLabel = () =>
  isOpenNow()
    ? "We're answering calls now"
    : `Lines open 7am — 8pm. Leave a WhatsApp and ${company.shortName || "we"}'ll reply first thing.`;
