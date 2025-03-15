import React from 'react'
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const Pokecard = () => {
  return (
   <>
        <Card 
            style={{width:250}}
            title='Ditto'
            cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Ditto' />}>
            <Meta description='fire, magic'/>
        </Card>
        
   </>
  )
}

export default Pokecard