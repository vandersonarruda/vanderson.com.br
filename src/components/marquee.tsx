import { ParallaxText } from './parallax-text'

interface MarqueeProps {
  title: string
}

export function Marquee({ title }: MarqueeProps) {
  return (
    <div className="py-4 text-black md:py-6 lg:py-8">
      <ParallaxText
        baseVelocity={-2}
        className="rotate-[9deg] scale-110 bg-yellow-600 py-6 opacity-80 blur-sm"
      >
        {title}
      </ParallaxText>
      <ParallaxText
        baseVelocity={2}
        className="-mt-16 -rotate-[4deg] scale-110 bg-yellow-400 py-6 md:-mt-24 lg:-mt-28"
      >
        {title}
      </ParallaxText>
    </div>
  )
}
