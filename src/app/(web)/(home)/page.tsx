import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Button } from '@/components/button'
import { LoadingIcon } from '@/components/loading'
import { shimmer, toBase64 } from '@/utils/placeholder-shimmer'
import ProjectList from '@/components/project-list'
import StackList from '@/components/stack-list'
import AwardsList from '@/components/awards-list'

// TODO:
// - remover Promise
// - create loading
// - usar tag suspense no portfolio
// - usar o intercepting routes
// - revisar texto do header e no metatag
// - trocar a imagem do header com link do S3
// - separar projects em um componente separado
// - 404 page
// - remover o no-store para o revalidate na página de projetos, pode subir o tempo
// - implementar o skeleton nas imagens
// - remover Promise da API do slug (project)
// - icon e link no mouse

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 10000))

  return (
    <div className="overflow-hidden">
      <section className="mx-auto flex max-w-limit flex-col items-center">
        <div className="flex w-5/6 flex-col gap-4 md:w-3/4 md:gap-6 lg:gap-10 xl:w-3/4">
          <div className="w-fit">
            <h1 className="text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
              <p>👋 Hey, I&apos;m</p>
              <p>Vanderson</p>
            </h1>
          </div>

          <h2 className="text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug">
            <p>
              — a software engineer skilled on web/mobile & IoT, working
              remotely from São Paulo, Brazil.
            </p>
          </h2>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto mt-8 max-w-limit md:mt-12 lg:mt-16">
        <div className="mx-auto w-11/12">
          <Link
            href="/project/pirelli-christs-view"
            className="flex w-full flex-col items-center overflow-hidden rounded-small  md:rounded-medium  lg:rounded-extra"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/vanderson-cover.jpg`}
              width={1475}
              height={680}
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
              alt="Cover with me on the head of Christ Redeemer"
              className="h-auto w-full object-cover align-middle"
            />
          </Link>
        </div>
      </section>

      {/* About Me */}
      <section className="mx-auto my-12 flex max-w-limit flex-col items-center md:my-16 lg:my-20">
        <div className="flex w-5/6 flex-col gap-5 font-normal leading-relaxed first-letter:text-base md:w-3/4 md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed">
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
          <div className="mt-1 flex flex-row gap-2 md:mt-3 md:gap-4">
            <Button
              title="LinkedIn"
              link="https://www.linkedin.com/in/vandersonarruda/"
              iconName="Linkedin"
            />
            <Button
              title="Github"
              link="https://github.com/vandersonarruda"
              iconName="Github"
            />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <div className="rounded-extra bg-black py-12 md:py-16 lg:py-20">
        <section className="mx-auto flex w-5/6 max-w-limit flex-col gap-8 md:gap-10">
          <h3 className="whitespace-nowrap text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
            Selected Work
          </h3>

          <Suspense fallback={<LoadingIcon isDark={true} />}>
            <ProjectList />
          </Suspense>
        </section>
      </div>

      {/* Tech stack */}
      {/* background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%); */}

      <div className="bg-stone-50 py-12 md:py-16 lg:py-20">
        {/* <div className="bg-gradient-to-r from-[#5f72bd] to-[#9b23ea] py-12 text-white md:py-16 lg:py-20"> */}
        <section className="mx-auto flex w-5/6 max-w-limit flex-col gap-8 md:gap-10">
          <h3 className="whitespace-nowrap text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
            Tech Stack
          </h3>

          <Suspense fallback={<LoadingIcon />}>
            <StackList />
          </Suspense>
        </section>
      </div>

      {/* Awards */}

      <div className="rounded-extra bg-gradient-to-r from-[#8fd3f4] to-[#84fab0] py-12 md:py-16 lg:py-20">
        {/* <div className="py-12 md:py-16 lg:py-20"> */}
        <section className="mx-auto flex w-5/6 max-w-limit flex-col gap-8 md:gap-10">
          <h3 className="whitespace-nowrap text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
            Top Awards
          </h3>

          <Suspense fallback={<LoadingIcon />}>
            <AwardsList />
          </Suspense>
        </section>
      </div>
    </div>
  )
}
