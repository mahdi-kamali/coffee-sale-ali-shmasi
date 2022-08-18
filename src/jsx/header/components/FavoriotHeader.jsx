import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const FavoriotHeader = () => {
  const [favSize, setFavSize] = useState(7);
  const navigator = useNavigate()

  function goToFavoriot() {
    navigator('/favoriot')
  }

  return (
    <div>
      <button onClick={() => { goToFavoriot() }} className="favoriot"><Icon icon="bi:heart" color="black" /> <span>{favSize}</span></button>
    </div>
  )
}

export default FavoriotHeader
