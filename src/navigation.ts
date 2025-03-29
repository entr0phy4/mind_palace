export interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
  }>
}

export const navigation: Array<NavGroup> = [
  {
    title: '',
    links: [{ title: 'Home', href: '/' }],
  },
  {
    title: 'Environment',
    links: [{ title: 'Dotfiles', href: '/dotfiles' }],
  },
  {
    title: 'Data structures',
    links: [
      { title: 'How memory works', href: '/how-memory-works' },
      { title: 'Arrays and Linked lists', href: '/arrays-and-linked-lists' },
    ],
  },
  {
    title: 'Hacking',
    links: [
      { title: 'Scripts', href: '/scripts' },
      { title: 'Tools', href: '/tools' },
    ],
  },
  {
    title: 'Algorithms',
    links: [
      { title: 'Fundamentals', href: '/fundamentals' },
      { title: 'Search', href: '/search' },
      { title: 'Sorting', href: '/sorting' },

      { title: 'Problems', href: '/problems' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { title: 'Authentication microservice', href: '/auth_microservice' },
    ],
  },
]
