import { GridPattern } from '@/components/GridPattern'
import { CogIcon } from '@/components/icons/CogIcon'

export interface Project {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

export const projects: Array<Project> = [
  {
    href: '/auth_microservice',
    name: 'Authentication MS',
    description:
      'Authentication microservice for user registration, login, password reset, roles and permissions.',
    icon: CogIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
]
