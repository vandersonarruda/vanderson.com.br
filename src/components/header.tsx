import Link from 'next/link'
import { Send } from 'lucide-react'

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-4 md:gap-8 lg:gap-12">
      <div className="text-lg font-bold md:text-lg lg:text-lg">
        {/* <Link href="/">Vanderson Arruda</Link> */}
      </div>
      <div>
        <Link href="/">Get in Touch</Link>
        {/* <button
          type="button"
          className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-zinc-950"
        >
          Get in touch <Send size={20} className="text-zinc-950" />
        </button> */}
      </div>
    </header>
  )
}
