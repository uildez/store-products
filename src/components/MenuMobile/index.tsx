import React from 'react'
import { Container, NavLink, NavMenu } from './menuStyles'

interface Props {
    onClose: () => void;
}

export const MenuMobile = ({ onClose }: Props) => {
    return (
        <Container>
            <NavMenu>
                <NavLink to="/" onClick={onClose}>Home</NavLink>
                <NavLink to="/about" onClick={onClose}>Sobre</NavLink>
                <NavLink to="/products" onClick={onClose}>Produtos</NavLink>
            </NavMenu>
        </Container>
    )
}
