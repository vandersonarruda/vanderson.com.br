import { Button } from './button'

import { BackButton } from './back-button'

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-4 px-6">
      <BackButton />
      <div>
        <Button
          title="Get in touch"
          link="mailto:hello@vanderson.com.br"
          iconName="Send"
        />
      </div>
    </header>
  )
}
