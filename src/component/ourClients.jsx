import {
  zenithLogo,
  brollLogo,
  eritoyLogo,
  dePhantomLogo,
  landmarkLogo,
} from "../assets/images";

const clients = [
  { id: "zenith", name: "Zenith Bank PLC", logo: zenithLogo },
  { id: "broll", name: "Broll Properties", logo: brollLogo },
  { id: "dephantom", name: "De Phantom Hotels", logo: dePhantomLogo },
  { id: "eritoy", name: "Eritoy Schools", logo: eritoyLogo },
  { id: "landmark", name: "Landmark Boulevard", logo: landmarkLogo },
];

// Five logos alone are narrower than a wide desktop viewport, which left the
// track hugging the left edge with dead space beside it. Repeating the set
// inside each half guarantees the track overflows any screen — and the track
// still consists of exactly two identical halves, so the seamless-loop maths
// is unchanged.
const REPEATS = 3;

/**
 * Client logos arrive as mismatched JPEGs and PNGs with baked-in white
 * boxes. Multiply blending against the white section drops those boxes out
 * while leaving every brand colour exactly as it is.
 */
const LogoRow = ({ clone = false }) => (
  <ul
    className="marquee-group"
    data-clone={clone ? "true" : undefined}
    aria-hidden={clone || undefined}
  >
    {Array.from({ length: REPEATS }).flatMap((_, pass) =>
      clients.map((client) => (
        <li
          key={`${client.id}-${pass}`}
          className={`flex-none${pass > 0 ? " marquee-dup" : ""}`}
        >
          <img
            src={client.logo}
            alt={clone || pass > 0 ? "" : client.name}
            loading="lazy"
            className="h-10 md:h-12 w-auto max-w-[160px] object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
          />
        </li>
      ))
    )}
  </ul>
);

const OurClients = () => (
  <section className="bg-white section-y border-t border-bone-300">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <p className="eyebrow text-brass-600">Trusted by</p>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
        Estates, banks and hotels across Lagos
      </h2>
      <p className="mt-4 text-ink-soft leading-relaxed">
        Facility managers keep our number because we turn up when we say we
        will, and because our technicians clear estate security without a fuss.
      </p>
    </div>

    <div className="marquee mt-12">
      <div className="marquee-track">
        <LogoRow />
        <LogoRow clone />
      </div>
    </div>
  </section>
);

export default OurClients;
