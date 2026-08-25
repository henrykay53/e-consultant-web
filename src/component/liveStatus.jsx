import { useEffect, useState } from "react";
import { isOpenNow } from "./availability";

/**
 * "Will anyone actually pick up?" is the last hesitation before a call.
 * This answers it before the visitor has to wonder.
 *
 * Rendered closed-state first so the prerendered HTML never claims we are
 * open when we are not; the real status resolves on mount.
 */
const LiveStatus = ({ onDark = false }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpenNow());
    const t = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-medium ${
        onDark ? "text-brand-100/80" : "text-ink-muted"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verified opacity-70" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            open ? "bg-verified" : "bg-brass-500"
          }`}
        />
      </span>
      {open ? "Answering calls now" : "Lines open 7am – 8pm · WhatsApp anytime"}
    </span>
  );
};

export default LiveStatus;
