import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { GitHubIcon } from './icons/GithubIcon'
import { dotfiles } from '@/dotfiles'
import { SocialLink } from './SocialLink'

export function Dotfiles() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="dotfiles">
        Dotfiles
      </Heading>

      <p className="mt-4 flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
        <SocialLink
          href="https://github.com/entr0phy4/.dotfiles"
          icon={GitHubIcon}
        >
          Follow us on GitHub
        </SocialLink>
        Dotfiles are configuration files that are used to customize and
        personalize your system. Here are some of the dotfiles that I use on a
        daily basis.
      </p>

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
