// import { Colors } from "../../theme/types";
// import { Login } from "../WalletModal/types";

export type Gradients = {
  bubblegum: string
}

export type Colors = {
  primary: string
  primaryBright: string
  primaryDark: string
  secondary: string
  tertiary: string
  success: string
  failure: string
  warning: string
  contrast: string
  dropdown: string
  invertedContrast: string
  input: string
  inputSecondary: string
  background: string
  backgroundDisabled: string
  text: string
  textDisabled: string
  textSubtle: string
  borderColor: string
  card: string

  // Gradients
  gradients: Gradients

  // Brand colors
  binance: string
}

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

export type Login = (connectorId: ConnectorNames) => void

export interface LangType {
  code: string
  language: string
}

export interface Profile {
  username?: string
  image?: string
  profileLink: string
  noProfileLink: string
  showPip?: boolean
}

export interface PushedProps {
  isPushed: boolean
  pushNav: (isPushed: boolean) => void
}

export interface NavTheme {
  background: string
  hover: string
}

export interface LinkStatus {
  text: string
  color: keyof Colors
}

export interface MenuSubEntry {
  label: string
  href: string
  calloutClass?: string
  status?: LinkStatus
}

export interface MenuEntry {
  label: string
  icon: string
  items?: MenuSubEntry[]
  href?: string
  calloutClass?: string
  initialOpenState?: boolean
  status?: LinkStatus
}

export interface PanelProps {
  isDark: boolean
  toggleTheme: (isDark: boolean) => void
  cakePriceUsd?: number
  currentLang: string
  langs: LangType[]
  setLang: (lang: LangType) => void
  links: Array<MenuEntry>
}

export interface NavProps extends PanelProps {
  account?: string
  login: Login
  profile?: Profile
  logout: () => void
}
