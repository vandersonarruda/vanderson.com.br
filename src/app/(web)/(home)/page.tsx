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
        <div className="flex w-[85%] flex-col gap-4 md:w-[75%] md:gap-6 lg:gap-8 xl:w-[70%]">
          <h1 className="flex flex-col text-5xl font-bold leading-tight tracking-tight md:text-[5rem] md:leading-[1.1] lg:text-[7rem] lg:leading-[1.1]">
            <span>👋 Hey,</span>
            <span>I&apos;m Vanderson</span>
          </h1>

          <h2 className="flex items-center justify-end text-2xl font-semibold leading-tight tracking-tight md:w-[600px] md:text-4xl md:leading-tight lg:w-[650px] lg:text-4xl lg:leading-tight">
            {/* — a software engineer skilled on web, IoT, mobile & AI — working
            remotely from São Paulo, Brazil. */}
            — a software engineer working remotely from São Paulo, Brazil.
          </h2>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto mt-8 max-w-limit md:mt-12 lg:mt-16">
        <div className="mx-auto w-[95%]">
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
        <div className="flex w-[85%] flex-col gap-5 font-normal leading-relaxed first-letter:text-base md:w-[75%] md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:w-[70%]">
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
      <div className="bg-black py-12 md:py-16 lg:py-20">
        <section className="mx-auto flex w-[85%] max-w-limit flex-col gap-8 md:gap-10">
          <h3 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-[5rem] md:leading-tight lg:text-[7rem] lg:leading-tight">
            Selected work
          </h3>

          <Suspense fallback={<LoadingIcon isDark={true} />}>
            <ProjectList />
          </Suspense>
        </section>
      </div>

      {/* Tech stack */}
      <div className="py-12 md:py-16 lg:py-20">
        <section className="mx-auto flex w-[85%] max-w-limit flex-col gap-8 md:gap-10">
          <h3 className="text-5xl font-bold leading-tight tracking-tight md:text-[5rem] md:leading-tight lg:text-[7rem] lg:leading-tight">
            Tech stack
          </h3>

          <Suspense fallback={<LoadingIcon />}>
            <StackList />
          </Suspense>
        </section>
      </div>

      {/* Awards stack */}

      <div className="bg-gradient-to-r from-[#8fd3f4] to-[#84fab0] py-12 md:py-16 lg:py-20">
        <section className="mx-auto flex w-[85%] max-w-limit flex-col gap-8 md:gap-10">
          <h3 className="text-5xl font-bold leading-tight tracking-tight md:text-[5rem] md:leading-tight lg:text-[7rem] lg:leading-tight">
            Awards
          </h3>

          <Suspense fallback={<LoadingIcon />}>
            <AwardsList />
          </Suspense>
        </section>
      </div>
    </div>
  )
}
