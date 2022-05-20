import { Col, Row, Spin } from 'antd'
import React from 'react'

import { Starship } from './starship'
import { useStarship } from '../hooks'

export const Starships = () => {
  const { ships } = useStarship()

  return !ships?.count ? (
    <Spin />
  ) : (
    <Row>
      {ships?.results.map((ship) => (
        <Row style={{ width: '100%', display: 'flex', justifyContent: 'center' }} gutter={[8, 48]}>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <Starship {...ship} />
          </Col>
        </Row>
      ))}
    </Row>
  )
}
