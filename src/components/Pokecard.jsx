import React from 'react'
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';


const Pokecard = ({name, image, types}) => {

  const typeString = types.map(elem => elem.type.name).join(', ')

  return (
   <>
        <Card 
            title={name}
            cover={<img src={image} alt={name} />}>
             extra={<StarButton isFavorite onClick={()=> alert('Clickeado')}/>} 
            <Meta description={typeString}/>
        </Card>
        
   </>
  )
}

export default Pokecard