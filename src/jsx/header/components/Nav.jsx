import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Nav = () => {

    const navigator = useNavigate()


    const [position, setPosition] = useState(1);


    function goToMainPage() {
        navigator('/')
    }

    function goToProductsPage() {
        navigator('/products')
    }

    function handleClick(pos) {
        setPosition(pos)
        switch (pos) {
            case 1: { goToMainPage(); break; }
            case 2: {goToProductsPage(); break; }
            case 3: { break; }
            case 4: { break; }
            default: { break; }
        }
    }


    return (
        <nav className="nav">
            <li className={position === 4 ? 'selected' : ''} onClick={() => handleClick(4)}>درباره ما</li>
            <li className={position === 3 ? 'selected' : ''} onClick={() => handleClick(3)}>تماس با ما</li>
            <li className={position === 2 ? 'selected' : ''} onClick={() => handleClick(2)} >محصولات</li>
            <li className={position === 1 ? 'selected' : ''} onClick={() => handleClick(1)} >خانه</li>
        </nav>
    )
}

export default Nav
