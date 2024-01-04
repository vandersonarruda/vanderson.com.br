import ProjectList from '@/components/project-list'
import { Button } from '@/components/button'
import { shimmer, toBase64 } from '@/utils/placeholder-shimmer'
import Image from 'next/image'
import Link from 'next/link'

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

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 10000))

  return (
    <div>
      <section className="max-w-limit mx-auto px-4 md:px-8 lg:px-16">
        <div className="mx-8 md:mx-20 lg:mx-36">
          <h1 className="flex flex-col text-4xl font-extrabold leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
            <p>👋 Hey,</p>
            <p>I&apos;m Vanderson</p>
          </h1>

          <h2 className="mt-4 w-full text-xl font-bold leading-normal md:w-[600px] md:text-4xl md:leading-normal lg:mt-8 lg:w-[860px] lg:text-5xl lg:leading-normal">
            — a software engineer skilled on web, IoT, mobile & AI — working
            remotely from São Paulo, Brazil.
          </h2>
        </div>

        {/* Cover */}
        <Link
          href="/project/pirelli-christs-view"
          className="mt-8 flex w-full flex-col items-center overflow-hidden rounded-small md:mt-16 md:rounded-medium lg:mt-24 lg:rounded-extra"
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
            alt="My picture on the head of Christ Redeemer"
            className="h-auto w-full object-cover align-middle"
          />
        </Link>
      </section>

      {/* About Me */}
      <section className="max-w-limit mx-auto px-4 py-8 md:px-16 md:py-16 lg:px-16 lg:py-20">
        <div className="mx-8 flex flex-col gap-8 text-base font-normal leading-relaxed md:mx-20 md:text-xl md:leading-relaxed lg:mx-36 lg:text-2xl lg:leading-relaxed">
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

          <Button
            title="LinkedIn"
            link="https://www.linkedin.com/in/vandersonarruda/"
            iconName="ExternalLink"
          />
        </div>
      </section>

      {/* Featured work */}
      <div className="w-full bg-zinc-950 py-8 md:py-16 lg:py-24">
        <section className="max-w-limit mx-auto flex flex-col gap-6 px-4 pb-3 md:gap-10 md:px-8 lg:gap-12 lg:px-16">
          <h3 className="mx-8 flex flex-col text-4xl font-extrabold leading-tight text-white md:mx-20 md:text-7xl md:leading-tight lg:mx-36 lg:text-8xl lg:leading-tight">
            Featured work
          </h3>

          <ProjectList />
        </section>
      </div>

      {/* Featured work */}
      <section className="max-w-limit mx-auto flex flex-col gap-6 px-4 py-8 md:gap-10 md:px-16 md:py-16 lg:gap-12 lg:px-16 lg:py-20">
        <h3 className="text-zin950 mx-8 flex flex-col text-4xl font-extrabold leading-tight md:mx-20 md:text-7xl md:leading-tight lg:mx-36 lg:text-8xl lg:leading-tight">
          Tech skills
        </h3>

        <p>FronteEnd</p>
        <p>FronteEnd</p>
        <p>FronteEnd</p>
        <p>FronteEnd</p>
        <p>FronteEnd</p>
      </section>
    </div>
  )
}
