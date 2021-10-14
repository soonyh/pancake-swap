import React from 'react'
import styled from 'styled-components'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { AppOutline, HandPayCircleOutline, ShopbagOutline, GiftOutline, MoreOutline } from 'antd-mobile-icons'

const FooterWrapper = styled.div`
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`

const tabs = [
  {
    key: 'home',
    title: 'Home',
    icon: <AppOutline />,
  },
  {
    key: 'swap',
    title: 'Convert',
    icon: <ShopbagOutline />,
    badge: '5',
  },
  {
    key: 'earn',
    title: 'Earn',
    icon: <HandPayCircleOutline />,
    badge: '99+',
  },
  {
    key: 'nft',
    title: 'NFT',
    icon: <GiftOutline />,
  },
  {
    key: 'more',
    icon: <MoreOutline />,
  },
]

const Footer = ({ history }) => {
  return (
    <FooterWrapper>
      <TabBar onChange={(key) => history.push(`/${key}`)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </FooterWrapper>
  )
}

export default withRouter(Footer)
