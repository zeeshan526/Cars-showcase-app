'use client'
import react,{useState} from 'react'
import { SearchManufacturer } from '.'

const handleSearch =()=>{

}
const SearchBar = () => {
    const [manufacturer,setManufacturer]=useState('');
  return (
<form className='searchBar' onSubmit={handleSearch}>
    <div className='searchBar__items'>
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
    </div>
</form>
  )
}

export default SearchBar
