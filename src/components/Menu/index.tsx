import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import links from './config'
import { CAKE } from '../../constants'

const UikitMenuWrapper = styled.div<any>`
  width: 100%;

  ${({ pathname }) => (pathname === '/home' ? `background-color: #21130a;` : '')}

  ${({ pathname }) =>
    pathname === '/home'
      ? `#bodywrapper,
        nav {
          background: none;
        } #bodywrapper { padding:0}`
      : ''}
`

const Menu = ({ history, ...rest }) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  let cakePriceUsd = 0
  try {
    cakePriceUsd = priceData ? Number(priceData.data[CAKE.address].price ?? 0) : 0
  } catch (e) {
    // Ignore
  }
  const profile = useGetLocalProfile()

  const {
    location: { pathname },
  } = history

  return (
    <UikitMenuWrapper id="menu" pathname={pathname}>
      <UikitMenu
        links={links}
        account={account as string}
        login={login}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={selectedLanguage?.code || ''}
        langs={allLanguages}
        setLang={setSelectedLanguage}
        cakePriceUsd={cakePriceUsd}
        profile={profile}
        {...rest}
      />
    </UikitMenuWrapper>
  )
}

export default withRouter(Menu)
