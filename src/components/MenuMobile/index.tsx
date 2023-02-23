import React from 'react'
import { Container, NavLink, NavMenu } from './menuStyles'

export const MenuMobile = () => {
    return (
        <Container>
            <NavMenu>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Sobre</NavLink>
                <NavLink to="/products">Produtos</NavLink>
            </NavMenu>
        </Container>
    )
}
