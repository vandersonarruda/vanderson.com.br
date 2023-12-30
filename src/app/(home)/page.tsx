import { ProjectItem } from '@/components/project-item'
import Image from 'next/image'

// TODO:
// - remover Promise
// - create loading
// - usar tag suspense no portfolio
// - usar o intercepting routes
// - revisar texto do header e no metatag
// - trocar a imagem do header com link do S3
// - separar projects em um componente separado

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 10000))

  return (
    <div>
      <div className="lg:mt-22 mx-6 mt-16 md:mx-20 md:mt-24 lg:mx-36">
        <h1 className="flex flex-col text-5xl font-bold leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
          <span>👋 Hey,</span>
          <span>I&apos;m Vanderson</span>
        </h1>

        <h2 className="mt-4 w-[330px] text-2xl font-medium leading-normal md:w-[600px] md:text-3xl md:leading-normal lg:mt-8 lg:w-[860px] lg:text-5xl lg:leading-normal">
          — a software engineer skilled on Web, IoT, Mobile & AI — working
          remotely from São Paulo, Brazil.
        </h2>
      </div>

      {/* Cover */}
      <div className="mt-8 flex w-full flex-col items-center md:mt-12 lg:mt-24">
        <Image
          src={'/vanderson-cover.jpg'}
          width={1520}
          height={816}
          alt="My picture on the head of Christ Redeemer"
          objectFit="cover"
          quality={100}
          className="h-auto rounded-3xl align-middle md:rounded-3xl lg:rounded-extra"
        />
      </div>

      {/* About Me */}
      <div className="text-1xl mx-6 mt-16 flex flex-col gap-8 font-normal leading-relaxed md:mx-20 md:mt-24 md:text-2xl md:leading-relaxed lg:mx-36 lg:mt-28">
        <p>
          Two decades of coding and still counting, I&apos;ve been programming
          and leading a skilled team of developers, electronic engineers,
          industrial designers, and makers — crafting cool projects for industry
          leaders like Netflix, Google, and Microsoft, while working at top
          agencies such as JWT and Media.Monks.
        </p>
        <p>
          When I say cool projects, I mean everything from crazy gadgets and web
          applications to live-streaming props and immersive event experiences.
        </p>
        <p>
          I continuously explore new tech to ensure that my skills remain fresh
          and cutting-edge. 🌱
        </p>

        <p>LinkedIn</p>
      </div>

      {/* Featured work */}

      <div className="mt-16 flex flex-col gap-8 md:mt-24  lg:mt-28">
        <h3 className="mx-6 flex flex-col text-5xl font-bold leading-tight md:mx-20 md:text-7xl md:leading-tight lg:mx-36 lg:text-[114px] lg:leading-tight">
          Featured work
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  )
}
