/**
 * # Welcome to Rivian!
 *
 * The purpose of this exercise is to see and hear how you solve problems in an
 * existing codebase.  This is a semi-non-trivial application composed of a few
 * react components and an api call to the Star Wars API https://swapi.co/.
 *
 * Ask any question you want, look up anything you want.  There are no dumb
 * questions.
 *
 * ACCEPTANCE CRITERIA:
 * 1. Add functioning pagination, using the Star Wars API, to the top
 *    of the list (hint: https://ant.design/components/list/#pagination)
 * 2. Update the individual ship card so the expansion toggle shows the
 *    properties and values of the ship using a Material UI Grid.  Do not
 *    show these keys: "films", "created", "edited", "url".
 *
 * The antd component looks like this:
 *  // pagination config
 *  https://ant.design/components/pagination/
 *  <List
    dataSource={data}
    pagination={{}}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
 **/

import React from 'react'
import './App.css'
import Layout from 'antd/lib/layout/layout'
import { Content } from 'antd/lib/layout/layout'
import { Row, Typography } from 'antd'
import 'antd/dist/antd.css'
import { Starships } from './components'

const { Title } = Typography

function App() {
  return (
    <Layout>
      <Content style={{ margin: 'auto', padding: '2rem' }}>
        <Row style={{ width: '100%', display: 'flex', justifyContent: 'center' }} gutter={[8, 48]}>
          <Title level={2}>STAR WARS</Title>
        </Row>
        <Row style={{ width: '100%', display: 'flex', justifyContent: 'center' }} gutter={[8, 48]}>
          <Title level={3}>STAR SHIP EXPLORER</Title>
        </Row>
        <Starships />
      </Content>
    </Layout>
  )
}

export default App
