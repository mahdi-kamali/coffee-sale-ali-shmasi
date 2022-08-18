import { useState } from "react"
import Email from "./components/Email"
import FavoriotHeader from "./components/FavoriotHeader"
import Logo from "./components/Logo"
import Nav from "./components/Nav"
import Phone from "./components/Phone"
import SearchBar from './components/SearchBar'
import ShoppingCart from "./components/ShoppingCart"
import TopSnap from "./components/TopSnap"
import User from "./components/User"

import { useSelector } from "react-redux/es/exports"


const Header = () => {

  const [topState, setTopState] = useState(true)


  window.onscroll = (e) => {
    const po = Math.round(window.pageYOffset)
    if (po < 50) {
      setTopState(true)
    }
    if (po > 0 ) {
      setTopState(false)
    }
  }


  return (
    <header >
      <div className={`top ${topState ? '' : 'hided'}`}>
        <div className="left">
          <Email />
          <Phone />
        </div>
        <div className="right">
          <TopSnap />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <ShoppingCart />
          <FavoriotHeader />
          <User />
        </div>
        <div className="right">
          <Nav />
          <SearchBar />
          <Logo />
        </div>
      </div>
    </header >
  )
}

export default Header
