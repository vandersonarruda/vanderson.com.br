export function Header() {
  return (
    <header className="lg:px-10 md:px-2 px-2">
      <div className="flex flex-row lg:gap-12 md:gap-8 gap-4 justify-end">
        <p className="py-2 px-4 lg:text-lg md:text-lg text-base">LinkedIn</p>
        <p className="py-2 px-4 lg:text-lg md:text-lg text-base">
          Get in touch
        </p>
      </div>

      <div className="lg:mx-36 md:mx-16 mx-8 lg:mt-20 mt-20 md:mt-20">
        <h1 className="lg:text-[114px] md:text-8xl text-5xl flex flex-col font-bold leading-tight lg:leading-tight md:leading-tight">
          <span>Hey,</span>
          <span>I&apos;m Vanderson</span>
        </h1>

        <h2 className="lg:text-5xl md:text-4xl text-2xl leading-normal lg:leading-normal md:leading-normal font-semibold lg:w-[860px] w-[330px] md:w-[600px] lg:mt-8 mt-4">
          — a software engineer skilled on Web, IoT, AI and Mobile — working
          remotely from São Paulo, Brazil.
        </h2>
      </div>
    </header>
  )
}
