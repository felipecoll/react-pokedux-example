import React from 'react'
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { StarOutlined } from '@ant-design/icons';

const Pokecard = ({name, image, types}) => {

  const typeString = types.map(elem => elem.type.name).join(', ')

  return (
   <>
        <Card 
            title={name}
            cover={<img src={image} alt={name} />}>
             extra={<StarOutlined/>} 
            <Meta description={typeString}/>
        </Card>
        
   </>
  )
}

export default Pokecard