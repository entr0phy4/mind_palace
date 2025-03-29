import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

import { dotfiles } from '@/dotfiles'

export function Dotfiles() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="dotfiles">
        Dotfiles
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {dotfiles.map((dotfile) => (
          <div key={dotfile.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {dotfile.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {dotfile.description}
            </p>
            <p className="mt-4">
              <Button href={dotfile.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
