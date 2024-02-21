import Awards from '@/components/awards'
import { Button } from '@/components/button'
import { HomeCover } from '@/components/home-cover'
import { LoadingIcon } from '@/components/loading'
import { Marquee } from '@/components/marquee'
import Projects from '@/components/projects'
import Stacks from '@/components/stacks'
import { Suspense } from 'react'

// TODO:
// - Review and revise text in the header and meta tags
// - Create a 404 error page
// - Add icons and links for mouse-over effects
// - try new title color
// - double check on projects descriptions

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
              — a software engineer skilled in web, mobile & IoT, working
              remotely from São Paulo, Brazil.
            </p>
          </h2>
        </div>

        <HomeCover />
      </section>

      {/* About Me */}
      <section className="flex flex-col items-center">
        <div className="flex w-5/6 flex-col gap-5 text-base font-normal leading-relaxed md:w-3/4 md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
          <p>
            With over 18 years of experience, I&apos;ve grown into a web
            application developer, creating innovative solutions and impactful
            projects for industry giants like Netflix, Google, and Microsoft. My
            work with leading agencies such as{' '}
            <a
              href="https://www.jwt.com/"
              target="_blank"
              className="underline"
            >
              JWT
            </a>{' '}
            and{' '}
            <a
              href="https://media.monks.com/"
              target="_blank"
              className="underline"
            >
              Media.Monks
            </a>{' '}
            have diversified my portfolio, illustrating my ability to thrive in
            complex, creative environments.
          </p>

          <p>
            I&apos;ve deep technical expertise in JavaScript, TypeScript,
            React.js, and Node.js, which allows me to develop scalable and
            efficient web applications that exceed modern expectations.
          </p>

          <p>
            My enthusiasm for innovation extends beyond conventional web
            development into the realm of IoT. I have spearheaded projects that
            joined Arduino and Raspberry Pi with web applications, creating
            immersive and interactive experiences for large-scale events and
            digital campaigns. These initiatives have not only significantly
            boosted user engagement but have also earned my team and me over 100
            awards.
          </p>

          <p>
            I invite you to explore my portfolio to learn more about the
            projects that have shaped it, and the unique value I can bring to
            your next digital challenge. 🌱
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
      <section className="mx-auto mb-5 w-11/12 p-2">
        <h3 className="mb-5 whitespace-nowrap text-[2.75rem] font-bold tracking-tight md:mb-8 md:text-[5rem] lg:mb-16 lg:text-9xl">
          — featured work
        </h3>

        <Suspense fallback={<LoadingIcon />}>
          <Projects />
        </Suspense>
      </section>

      {/* Tech stack */}
      <section className="mx-auto mb-5 w-11/12 p-2">
        <h3 className="mb-5 whitespace-nowrap text-[2.75rem] font-bold tracking-tight md:mb-8 md:text-[5rem] lg:mb-16 lg:text-9xl">
          — tech stack
        </h3>

        <Suspense fallback={<LoadingIcon />}>
          <Stacks />
        </Suspense>
      </section>

      {/* Marquee */}
      <Marquee title="Typescript — React — Node —" />

      {/* Awards */}
      <section className="mx-auto mb-5 w-11/12 p-2">
        <h3 className="mb-5 whitespace-nowrap text-[2.75rem] font-bold tracking-tight md:mb-8 md:text-[5rem] lg:mb-16 lg:text-9xl">
          — top awards
        </h3>

        <Suspense fallback={<LoadingIcon />}>
          <Awards />
        </Suspense>
      </section>
    </div>
  )
}
