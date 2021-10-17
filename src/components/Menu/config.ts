import { MenuEntry } from '@pancakeswap-libs/uikit'

export const MENU_HEIGHT = 64
export const MENU_ENTRY_HEIGHT = 48
export const SIDEBAR_WIDTH_FULL = 240
export const SIDEBAR_WIDTH_REDUCED = 56

const config: MenuEntry[] = [
  {
    label: 'Notice',
    icon: 'notice',
    href: '/',
  },
  {
    label: 'Bug Bounty program',
    icon: 'bounty',
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
    icon: 'faq',
    href: '/',
  },
]

export default config
