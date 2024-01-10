import Link from 'next/link'
import { Button } from './button'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <div className="flex h-fit w-full flex-col items-center gap-12 p-6">
      <div className="flex h-1/2 flex-col items-center justify-center py-4 text-xl font-normal leading-normal tracking-tight md:text-2xl md:leading-normal lg:text-3xl lg:leading-normal">
        <p className="flex flex-row items-center gap-3">
          <Mail /> Feel free to contact
        </p>
        <Link
          href="mailto:hello@vanderson.com.br"
          className="font-semibold underline"
        >
          hello@vanderson.com.br
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <Button
          link="https://www.linkedin.com/in/vandersonarruda/"
          iconName="Linkedin"
        />
        <Button link="https://github.com/vandersonarruda" iconName="Github" />
        <Button
          link="https://www.instagram.com/vandersonarruda/"
          iconName="Instagram"
        />
      </div>
    </div>
  )
}
