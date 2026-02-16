import Image from 'next/image';

const HERO_IMAGE = '/images/almighty.jpg';
const HERO_ALT = 'aLMIGHTY Bistro interior';

interface MatteHeroBackgroundProps {
  /** When true, adds a coral-to-teal gradient overlay on top (for CTA section) */
  withGradient?: boolean;
  /** Cream overlay opacity: 0-100. Default 90 for dishes, 85 for CTA. */
  matteOpacity?: number;
  /** Optional class for the root container */
  className?: string;
}

export default function MatteHeroBackground({
  withGradient = false,
  matteOpacity = 90,
  className = '',
}: MatteHeroBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Layer 1: Hero image with subtle matte filter */}
      <Image
        src={HERO_IMAGE}
        alt={HERO_ALT}
        fill
        className="object-cover object-center brightness-[1.02] saturate-[0.85]"
        sizes="100vw"
      />
      {/* Layer 2: Cream matte overlay */}
      <div
        className="absolute inset-0 bg-[#FDF8F3]"
        style={{ opacity: matteOpacity / 100 }}
      />
      {/* Layer 3 (optional): Tropical gradient for CTA */}
      {withGradient && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#E07B54] to-[#2A9D8F]"
          style={{ opacity: 0.82 }}
        />
      )}
    </div>
  );
}
