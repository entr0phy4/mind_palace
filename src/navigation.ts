export interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
  }>
}

export const navigation: Array<NavGroup> = [
  {
    title: 'Algorithms',
    links: [
      { title: 'Fundamentals', href: '/fundamentals' },
      { title: 'Search', href: '/search' },
      { title: 'Sorting', href: '/sorting' },

      { title: 'Problems', href: '/problems' },
    ],
  },
]
