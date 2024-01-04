import { Button } from './button'

import { BackButton } from './back-button'

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-4 md:gap-8 lg:gap-12">
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
