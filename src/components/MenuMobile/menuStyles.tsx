import styled, { css } from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { MdClose } from 'react-icons/md'

export const Container = styled.section`
    background: rgba(238, 238, 238, 0.9);
    backdrop-filter: blur(3px);
    height: 50%;
    width: 100%;
    display: flex;
    position: absolute;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    padding: 0.5rem calc((100vw - 1200px) / 2);
    z-index: 20;
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const Close = styled(MdClose)`
    color: #00BEED;
    border-radius: .3rem;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #00A8D7;
        color: #fff;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }

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
    flex-direction: column;
    align-items: center;
`

export const NavLink = styled(Link)`
    color: #00BEED;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 5rem;
    font-weight: 500;

    &.active{
        color: #00A8D7;
    }
`