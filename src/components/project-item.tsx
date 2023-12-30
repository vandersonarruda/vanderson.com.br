'use-client'

import Image from 'next/image'
import Link from 'next/link'

export function ProjectItem() {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="group h-auto max-w-full overflow-hidden rounded-3xl md:rounded-medium"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          width={500}
          height={500}
          quality={100}
          alt=""
        />
        {/* <Image
                className="invisible group-hover:visible"
                src="/thumb1.gif"
                width={500}
                height={500}
                quality={100}
                alt=""
              /> */}
      </Link>
      <p>Projeto tal</p>
      <p>#webgl</p>
    </div>
  )
}
