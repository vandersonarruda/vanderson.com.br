import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-4 md:gap-8 lg:gap-12">
      <div className="text-lg font-bold md:text-lg lg:text-lg">
        {/* <Link href="/">Vanderson Arruda</Link> */}
      </div>
      <div>
        {/* <p className="px-4 py-2 text-base md:text-lg lg:text-lg">LinkedIn</p> */}
        <p className="px-4 text-base md:text-lg lg:text-lg">Get in touch</p>
      </div>
    </header>
  )
}
