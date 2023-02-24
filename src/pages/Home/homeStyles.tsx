import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
    width: 100%;
    height: 100%;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    margin: 2rem 0;
    
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 2rem;
    }
`

export const BtnProfile = styled(Link)`
    padding: 1rem 2rem;
    background: #00BEED;
    color: #fff;
    border-radius: .5rem;
    text-decoration: none;
    white-space: nowrap;

    &:hover{
        color: #00BEED;
        background: #fff;
        transition: all .2s ease-in-out;
    }
`

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;
    height: 80%;
    
    @media screen and (min-width: 768px) {
        grid-template-columns: 1;       
    } 
`

export const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background: #fff;
    color: #00BEED;
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    padding: 2rem 3rem;
    
    &:hover{
        color: #fff;
        background: #00BEED;
        transition: all .2s ease-in-out;
    }

    h2 {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    p{
        font-size: 1rem;
    }
`

export const CardDisabled = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background: #fff;
    color: #ddd;
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    padding: 2rem 3rem;
    opacity: .7;
    cursor: default;

    h2 {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    p{
        font-size: 1rem;
    }
`