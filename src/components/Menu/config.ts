import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'FAQ',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Bug Bounty program',
    icon: 'TradeIcon',
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
    label: 'Notice',
    icon: 'HomeIcon',
    href: '/',
  },
]

export default config
