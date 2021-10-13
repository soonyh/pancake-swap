import React from 'react'
import styled from 'styled-components'
import { Swiper, Card, Grid } from 'antd-mobile'
import { Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const HomeWrapper = styled.div`
  width: 100%;
  .adm-swiper-track-inner {
    -webkit-mask-image: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, #ffffff 50%, #ffffff 75%);
  }
  .adm-swiper-slide {
    -webkit-mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 50%, #000 75%);
  }
  .adm-page-indicator-dot {
    border: 2px solid #8f80ba;
  }
  .adm-card {
    margin-bottom: 24px;
  }
  .adm-grid {
    text-align: center;
  }
`
const BorderedImg = styled.img<any>`
  border: 1px solid rgba(133, 133, 133, 0.15);
`
const SwiperImg = styled.img<any>`
  height: auto;
`

const colors = [
  {
    id: 1,
    title: 'bitcoin1',
    imgUrl: '/images/swiper1.jpg',
  },
  {
    id: 2,
    title: 'bitcoin2',
    imgUrl: '/images/swiper2.jpg',
  },
  {
    id: 3,
    title: 'bitcoin2',
    imgUrl: '/images/swiper4.jpg',
  },
]

const items = colors.map(({ id, title, imgUrl }) => (
  <Swiper.Item key={id}>
    <SwiperImg src={imgUrl} alt={title} width="100%" />
  </Swiper.Item>
))

export default function Pool() {
  return (
    <HomeWrapper>
      <Swiper autoplay>{items}</Swiper>
      <div style={{ padding: '0 16px' }}>
        <Card>
          <Text mb="16px" textAlign="center">
            MDX使用场景
          </Text>
          <Grid columns={3} gap={12}>
            <Grid.Item>
              <BorderedImg src="/images/partner2.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner3.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner4.jpg" alt="partner" />
            </Grid.Item>
          </Grid>
        </Card>
        <Card>
          <Text mb="16px" textAlign="center">
            审计机构
          </Text>
          <Grid columns={3} gap={12}>
            <Grid.Item>
              <BorderedImg src="/images/partner2.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner3.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner4.jpg" alt="partner" />
            </Grid.Item>
          </Grid>
        </Card>
        <Card>
          <Text mb="16px" textAlign="center">
            合作伙伴
          </Text>
          <Grid columns={3} gap={12}>
            <Grid.Item>
              <BorderedImg src="/images/partner1.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner2.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner3.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner4.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner5.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner6.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner3.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner4.jpg" alt="partner" />
            </Grid.Item>
            <Grid.Item>
              <BorderedImg src="/images/partner5.jpg" alt="partner" />
            </Grid.Item>
          </Grid>
        </Card>
      </div>
    </HomeWrapper>
  )
}
