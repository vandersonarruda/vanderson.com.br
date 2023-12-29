import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] px-2 py-5 md:px-10 md:py-5">
      {/* Header */}
      <header>
        <div className="flex flex-row justify-end gap-4 md:gap-8 lg:gap-12">
          {/* <p className="px-4 py-2 text-base md:text-lg lg:text-lg">LinkedIn</p> */}
          <p className="px-4 py-2 text-base md:text-lg lg:text-lg">
            Get in touch
          </p>
        </div>

        <div className="lg:mt-22 mx-6 mt-16 md:mx-20 md:mt-24 lg:mx-36">
          <h1 className="flex flex-col text-5xl font-bold leading-tight md:text-7xl md:leading-tight lg:text-[114px] lg:leading-tight">
            <span>Hey,</span>
            <span>I&apos;m Vanderson</span>
          </h1>

          <h2 className="mt-4 w-[330px] text-2xl font-medium leading-normal md:w-[600px] md:text-3xl md:leading-normal lg:mt-8 lg:w-[860px] lg:text-5xl lg:leading-normal">
            — a software engineer skilled on Web, IoT, Mobile & AI — working
            remotely from São Paulo, Brazil.
          </h2>
        </div>
      </header>

      {/* Cover */}
      <div className="mt-8 flex w-full flex-col items-center md:mt-12 lg:mt-24">
        <Image
          src={'/vanderson-cover.jpg'}
          width={1600}
          height={458}
          alt="My picture on the top of Christ Redeemer"
          objectFit="cover"
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
          <div>
            <Image
              className="h-auto max-w-full rounded-3xl md:rounded-medium"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              width={500}
              height={500}
              alt=""
            />
            <p>Projeto tal</p>
            <p>#webgl</p>
          </div>

          <Image
            className="h-auto max-w-full rounded-3xl md:rounded-medium"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            width={500}
            height={500}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-3xl md:rounded-medium"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            width={500}
            height={500}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-3xl md:rounded-medium"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            width={500}
            height={500}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-3xl md:rounded-medium"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            width={500}
            height={500}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-3xl md:rounded-medium"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            width={500}
            height={500}
            alt=""
          />
        </div>

        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-4">
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Image
                className="md:rounded-medium h-auto max-w-full rounded-3xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
