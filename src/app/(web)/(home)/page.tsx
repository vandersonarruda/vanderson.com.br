import { Suspense } from 'react'
import { Button } from '@/components/button'
import { HomeCover } from '@/components/home-cover'
import { LoadingIcon } from '@/components/loading'
import Projects from '@/components/projects'
import Stacks from '@/components/stacks'
import Awards from '@/components/awards'
import { ParallaxText } from '@/components/parallax-text'

// TODO:
// - Remove 'Promise'
// - Create a loading indicator for the home page
// - Use 'Route Interception'
// - Review and revise text in the header and meta tags
// - Create a 404 error page
// - Replace 'no-store' with 'revalidate' on the projects page, consider increasing the revalidation time
// - Implement skeleton screens for images
// - Remove 'Promise' from the slug API (project)
// - Add icons and links for mouse-over effects

export default async function Home() {
  return (
    <div className="flex flex-col gap-12 overflow-hidden pt-6 md:gap-14 md:pt-12 lg:gap-24 lg:pt-16">
      <section className="flex flex-col items-center">
        <div className="flex w-5/6 flex-col gap-4 md:w-3/4 md:gap-8 lg:gap-12 xl:w-3/4">
          <div className="w-fit">
            <h1 className="text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
              <p>👋 Hey, I&apos;m</p>
              <p>Vanderson</p>
            </h1>
          </div>

          <h2 className="text-xl font-medium leading-snug tracking-tight md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug">
            <p>
              — a <span className="underline">software engineer</span> skilled
              on web/mobile & IoT, working remotely from São Paulo, Brazil.
            </p>
          </h2>
        </div>

        <HomeCover />
      </section>

      {/* About Me */}
      <section className="flex flex-col items-center">
        <div className="flex w-5/6 flex-col gap-5 text-base font-normal leading-relaxed md:w-3/4 md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
          <p>
            Two decades of coding and still counting, I&apos;ve been programming
            and leading a skilled team of developers, electronic engineers,
            industrial designers, and makers — crafting cool projects for
            industry leaders like Netflix, Google, and Microsoft, while working
            at top agencies such as JWT and Media.Monks.
          </p>
          <p>
            When I say cool projects, I mean everything from crazy gadgets and
            web applications to live-streaming props and immersive event
            experiences.
          </p>
          <p>
            I continuously explore new tech to ensure that my skills remain
            fresh and cutting-edge. 🌱
          </p>
          <div className="mt-1 flex flex-row gap-3 md:mt-3 md:gap-4">
            <Button
              title="LinkedIn"
              link="https://www.linkedin.com/in/vandersonarruda/"
              iconName="Linkedin"
            />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto mb-5 w-11/12 p-5">
        <h3 className="mb-8 whitespace-nowrap text-5xl font-bold tracking-tight md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl">
          Selected Work
        </h3>

        <Suspense fallback={<LoadingIcon />}>
          <Projects />
        </Suspense>
      </section>

      {/* Tech stack */}
      <section className="mx-auto mb-5 w-11/12 p-5">
        {/* <h3 className="mb-8 whitespace-nowrap bg-gradient-to-r from-[#5f72bd] to-[#9b23ea] bg-clip-text text-5xl font-bold tracking-tight text-transparent md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl"> */}
        <h3 className="mb-8 whitespace-nowrap text-5xl font-bold tracking-tight text-zinc-800 md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl">
          Tech Stack
        </h3>

        <Suspense fallback={<LoadingIcon />}>
          <Stacks />
        </Suspense>
      </section>

      {/* Marquee */}
      <section className="py-4 text-black md:py-6 lg:py-8">
        <ParallaxText
          baseVelocity={-2}
          className="rotate-[9deg] scale-110 bg-yellow-600 py-4 opacity-80 blur-sm"
        >
          Software Engineer -
        </ParallaxText>
        <ParallaxText
          baseVelocity={2}
          className="-mt-16 -rotate-[4deg] scale-110 bg-yellow-400 py-4 md:-mt-24 lg:-mt-28"
        >
          Software Engineer -
        </ParallaxText>
      </section>

      {/* Awards */}
      <section className="mx-auto mb-5 w-11/12 p-5">
        {/* <h3 className="mb-8 whitespace-nowrap bg-gradient-to-r from-[#44ace0] to-[#61c686] bg-clip-text text-5xl font-bold tracking-tight text-transparent md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl"> */}
        <h3 className="mb-8 whitespace-nowrap text-5xl font-bold tracking-tight text-zinc-800 md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl">
          Top Awards
        </h3>

        <Suspense fallback={<LoadingIcon />}>
          <Awards />
        </Suspense>
      </section>
    </div>
  )
}
