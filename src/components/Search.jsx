import {Input} from 'antd'
import 'antd/dist/reset.css'


const Search = () => {
  return (
    <Input.Search placeholder='Buscar...' style={{marginBottom: 10}}/>
  )
}

export default Search