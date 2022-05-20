import React, { useState } from 'react'
import { Divider } from 'antd'
import Card from 'antd/lib/card'
import Meta from 'antd/lib/card/Meta'
import Image from 'antd/lib/image'
import { EllipsisOutlined } from '@ant-design/icons'
import Typography from 'antd/lib/typography'
import { IStarship } from '../hooks'
import { StyledAvatar } from './styled'

export const Starship: React.FC<IStarship> = (starship) => {
  const { name, manufacturer, url, starship_class, crew, cargo_capacity } = starship
  const [expanded, setExpanded] = useState<boolean>(false)
  const imageSrc =
    url
      .replace('http://swapi.dev/api/', 'https://starwars-visualguide.com/assets/img/')
      .slice(0, -1) + '.jpg'

  const handleExpansion = () => setExpanded(!expanded)
  return (
    <Card
      cover={
        <Image
          src={imageSrc}
          fallback="https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
        />
      }
      actions={[<EllipsisOutlined key="ellipsis" onClick={handleExpansion} />]}
    >
      <Meta
        avatar={<StyledAvatar> {name.substr(0, 1)}</StyledAvatar>}
        title={name}
        description={manufacturer}
      />
      <Divider />
      <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
        The {name} is a {starship_class} manufactured by {manufacturer}. It is crewed by {crew}{' '}
        crewman with a capcity of {cargo_capacity}.
      </Typography.Paragraph>
    </Card>
  )
}
