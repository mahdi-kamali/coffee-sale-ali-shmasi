import { Icon } from '@iconify/react';


const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder='نام محصول یا برند را جسجتو کنید' />
      <Icon icon="akar-icons:search" color="black" />
    </div>
  )
}

export default SearchBar
