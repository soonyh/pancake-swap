import React from 'react'
import { Text, Dropdown, Button } from '@pancakeswap-libs/uikit'
import { GlobalOutline } from 'antd-mobile-icons'
// import { SvgProps } from '../../Svg'
// import * as IconModule from '../icons'
import { LangType } from '../types'
import MenuButton from './MenuButton'

// const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> }
// const { LanguageIcon } = Icons

interface Props {
  currentLang: string
  langs: LangType[]
  setLang: (lang: LangType) => void
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top-right"
    target={
      <Button
        variant="text"
        startIcon={<GlobalOutline color="textSubtle" fontSize="24px" style={{ marginRight: '4px' }} />}
      >
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: '32px', height: 'auto', whiteSpace: 'nowrap' }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
)

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang)
