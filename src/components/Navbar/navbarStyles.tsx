import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FaBars, FaSearch } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1200px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #00BEED;
    background-color: #fff;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem 1rem;
    height: 100%;
    cursor: pointer;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #00A8D7;
        color: #fff;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #00BEED;


    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    background: #dddd;
    align-items: center;
    justify-content: end;
    width: 250px;
    border-radius: 2rem;
    height: 40px;
    padding: 0 1rem;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(FaSearch)`
    color: #00BEED;
    font-size: 1rem;
    cursor: pointer;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00A8D7;
    }
`