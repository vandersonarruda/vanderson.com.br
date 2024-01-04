import { Button } from './button'

import { BackButton } from './back-button'

export function Header() {
  return (
    <header className="max-w-limit mx-auto flex flex-row justify-between gap-4 px-4 md:gap-8 md:px-8 lg:gap-12 lg:px-16">
      <BackButton />
      <div>
        <Button
          title="Get in Touch"
          link="mailto:hello@vanderson.com.br"
          iconName="Send"
        />
      </div>
    </header>
  )
}
