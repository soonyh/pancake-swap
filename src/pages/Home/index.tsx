import React from 'react'
import styled from 'styled-components'
import { Swiper, Card, Grid, Ellipsis } from 'antd-mobile'
import { Text, Button } from '@pancakeswap-libs/uikit'
import { Link } from 'react-router-dom'
import {
  HandPayCircleOutline,
  FlagOutline,
  HeartOutline,
  RightOutline,
  UserOutline,
  MoreOutline,
} from 'antd-mobile-icons'
import useI18n from 'hooks/useI18n'

const HomeWrapper = styled.div`
  width: 100%;
  color: #1c1311;
  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
      Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
  .adm-swiper-track-inner {
    -webkit-mask-image: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, #ffffff 50%, #ffffff 75%);
  }
  .adm-swiper-slide {
    -webkit-mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 50%, #000 75%);
    text-align: center;
  }
  .adm-page-indicator-dot {
    border: 2px solid #8f80ba;
  }
  .adm-card {
    margin-bottom: 16px;
  }
  .adm-grid {
    text-align: center;
  }
  .adm-card-header-title {
    font-weight: normal;
  }
`
const BorderedImg = styled.img<any>`
  border: 1px solid rgba(133, 133, 133, 0.15);
`
const SwiperImg = styled.img<any>`
  min-height: 170px;
`

const TableWrapper = styled.table`
  width: 100%;
  color: #1c1311;
  th,
  td {
    padding: 8px;
    line-height: 1.42857143;
    text-align: center;
  }
  th {
    vertical-align: bottom;
    font-weight: normal;
    border-bottom: 1px solid rgba(133, 133, 133, 0.15);
  }
  td {
    vertical-align: top;
  }
  tbody > tr:nth-of-type(odd) {
    background-color: #f8f8f8;
  }
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
    <SwiperImg src={imgUrl} alt={title} />
  </Swiper.Item>
))

export default function Pool() {
  return (
    <HomeWrapper>
      <Swiper autoplay allowTouchMove>
        {items}
      </Swiper>
      <div style={{ padding: '0 16px' }}>
        <Card>
          <Text textAlign="center" color="#1f1d1e" textTransform="capitalize">
            <Ellipsis direction="end" content="liquidity pledge" />
          </Text>
          <Text textAlign="center" color="#1c1311" style={{ padding: '12px 0', fontSize: '20px', fontWeight: 'bold' }}>
            <Ellipsis direction="end" content="4,274,295,201.52" />
          </Text>
          <Grid columns={2} gap={12}>
            <Grid.Item>
              <div style={{ verticalAlign: 'middle', color: '#a2a4a1', padding: '4px 0' }}>
                <FlagOutline
                  color="#6bcd62"
                  fontSize="20px"
                  style={{ verticalAlign: 'text-bottom', marginRight: '4px' }}
                />
                The pledge
              </div>
              <Ellipsis direction="end" content="1,274,295,201.52" style={{ fontWeight: 'bold', padding: '4px 0' }} />
            </Grid.Item>
            <Grid.Item style={{ borderLeft: '1px solid rgba(133,133,133,0.1)' }}>
              <div style={{ verticalAlign: 'middle', color: '#a2a4a1', padding: '4px 0' }}>
                <HeartOutline
                  color="#f0a307"
                  fontSize="20px"
                  style={{ verticalAlign: 'text-bottom', marginRight: '4px' }}
                />
                The pledge
              </div>
              <Ellipsis direction="end" content="2,274,295,201.52" style={{ fontWeight: 'bold', padding: '4px 0' }} />
            </Grid.Item>
          </Grid>
        </Card>
        <Card
          title={
            <div style={{ color: '#f0a307' }}>
              <HandPayCircleOutline fontSize="20px" style={{ verticalAlign: 'text-bottom', marginRight: '4px' }} />
              Flow Mining
            </div>
          }
          extra={
            <Link to="/home">
              <RightOutline />
            </Link>
          }
        >
          <TableWrapper>
            <thead>
              <tr>
                <th>Deal</th>
                <th>Curgency</th>
                <th>Yield</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DMT/DUSD</td>
                <td>JNIU</td>
                <td style={{ color: '#4cc65d' }}>245.12%</td>
              </tr>
              <tr>
                <td>DEP/HUSD</td>
                <td>JNIU</td>
                <td style={{ color: '#4cc65d' }}>145.12%</td>
              </tr>
              <tr>
                <td>SDK/DUSD</td>
                <td>JNIU</td>
                <td style={{ color: '#4cc65d' }}>129.12%</td>
              </tr>
              <tr>
                <td>YDAD/DUSD</td>
                <td>JNIU</td>
                <td style={{ color: '#4cc65d' }}>110.12%</td>
              </tr>
              <tr>
                <td>DEP/HUSD</td>
                <td>JNIU</td>
                <td style={{ color: '#4cc65d' }}>145.12%</td>
              </tr>
            </tbody>
          </TableWrapper>
        </Card>
        <Card>
          <Text mb="16px" textAlign="center" color="#1f1d1e" textTransform="capitalize">
            MDX application scenarios
          </Text>
          <Grid columns={3} gap={12}>
            <Grid.Item>
              <Text textTransform="capitalize" color="#1c1311" style={{ fontWeight: 'bold', padding: '4px 0' }}>
                destroyed
              </Text>
              <Ellipsis
                direction="end"
                rows={2}
                content="Used to buy back and destroy MDX"
                style={{ padding: '4px 0', fontSize: '12px', color: '#a2a4a1' }}
              />
            </Grid.Item>
            <Grid.Item>
              <Text textTransform="capitalize" color="#1c1311" style={{ fontWeight: 'bold', padding: '4px 0' }}>
                Award
              </Text>
              <Ellipsis
                direction="end"
                rows={2}
                content="Pledge MDX rewards"
                style={{ padding: '4px 0', fontSize: '12px', color: '#a2a4a1' }}
              />
            </Grid.Item>
            <Grid.Item>
              <Text textTransform="capitalize" color="#1c1311" style={{ fontWeight: 'bold', padding: '4px 0' }}>
                Dao
              </Text>
              <Ellipsis
                direction="end"
                rows={2}
                content="Community proposals and votes"
                style={{ padding: '4px 0', fontSize: '12px', color: '#a2a4a1' }}
              />
            </Grid.Item>
          </Grid>
        </Card>
        <Card>
          <Text mb="16px" textAlign="center" color="#1f1d1e" textTransform="capitalize">
            audit institution
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
          <Text mb="16px" textAlign="center" color="#1f1d1e" textTransform="capitalize">
            Partners
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
