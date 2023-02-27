import React, { useState } from 'react'
import egetLogo from '../../assets/images/logo-eget-icon.png'
import { MenuMobile } from '../MenuMobile'
import { Close } from '../MenuMobile/menuStyles'
import { Bars, Nav, NavLink, NavMenu } from './navbarStyles'

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const handleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <>
            <Nav>
                <img src={egetLogo} style={{ width: "4rem" }} alt="Logo e-Get" />
                {menuVisible ? <Close onClick={handleMenu} /> : <Bars onClick={handleMenu} />}
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Sobre</NavLink>
                    <NavLink to="/products">Produtos</NavLink>
                </NavMenu>
            </Nav>
            {menuVisible ? <MenuMobile onClose={() => setMenuVisible(false)} /> : ""}
        </>
    )
}

export default Navbar