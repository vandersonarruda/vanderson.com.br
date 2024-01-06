import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Button } from '@/components/button'
import { LoadingIcon } from '@/components/loading'
import ProjectList from '@/components/project-list'
import StackList from '@/components/stack-list'
import { shimmer, toBase64 } from '@/utils/placeholder-shimmer'

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
    <div>
      <section className="mx-auto flex max-w-limit flex-col items-center">
        <div className="flex w-[90%] flex-col gap-4 md:w-[75%] md:gap-6 lg:gap-8 xl:w-[70%]">
          <h1 className="flex flex-col text-5xl font-bold leading-tight tracking-tight md:text-[5rem] md:leading-[1.1] lg:text-[7rem] lg:leading-[1.1]">
            <span>👋 Hey,</span>
            <span>I&apos;m Vanderson</span>
          </h1>

          <h2 className="flex items-center justify-end text-2xl font-semibold leading-tight tracking-tight md:w-[600px] md:text-4xl md:leading-tight lg:w-[800px] lg:text-5xl lg:leading-tight">
            — a software engineer skilled on web, IoT, mobile & AI — working
            remotely from São Paulo, Brazil.
          </h2>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto mt-8 max-w-limit md:mt-16 lg:mt-24">
        <div className="px-5">
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
      <section className="mx-auto my-12 flex max-w-limit flex-col items-center md:my-16 lg:my-24">
        <div className="w-[90%] text-base font-normal leading-relaxed md:w-[75%] md:text-xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:w-[70%]">
          <div className="mb-8 flex flex-col gap-5">
            <p>
              Two decades of coding and still counting, I&apos;ve been
              programming and leading a skilled team of developers, electronic
              engineers, industrial designers, and makers — crafting cool
              projects for industry leaders like Netflix, Google, and Microsoft,
              while working at top agencies such as JWT and Media.Monks.
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
          </div>

          <Button
            title="LinkedIn"
            link="https://www.linkedin.com/in/vandersonarruda/"
            iconName="ExternalLink"
          />
        </div>
      </section>

      {/* Featured work */}
      <div className="w-full bg-zinc-950 py-12 md:py-16 lg:py-24">
        <section className="mx-auto flex max-w-limit flex-col items-center">
          <div className="flex w-[90%] flex-col gap-6 md:w-[85%]">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-[5rem] md:leading-tight lg:text-[7rem] lg:leading-tight">
              Featured work
            </h1>

            <Suspense fallback={<LoadingIcon isDark={true} />}>
              <ProjectList />
            </Suspense>
          </div>
        </section>
      </div>

      {/* Tech stack */}
      <div className="w-full bg-stone-50 py-12 md:py-16 lg:py-24">
        <section className="mx-auto flex max-w-limit flex-col items-center">
          <div className="flex w-[90%] flex-col gap-6 md:w-[85%]">
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-[5rem] md:leading-tight lg:text-[7rem] lg:leading-tight">
              Tech stack
            </h1>

            <div className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <Suspense fallback={<LoadingIcon />}>
                <StackList />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
