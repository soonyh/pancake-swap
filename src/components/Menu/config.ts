import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Notice',
    icon: 'TicketIcon',
    href: '/',
  },
  {
    label: 'Bug Bounty program',
    icon: 'IfoIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Apply for liquidity incentive',
        href: '/swap',
      },
      {
        label: 'MDX Ecological Fund application',
        href: '/pool',
      },
    ],
  },
  {
    label: 'FAQ',
    icon: 'GroupsIcon',
    href: '/',
  },
]

export default config
