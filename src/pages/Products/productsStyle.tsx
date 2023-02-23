import styled from "styled-components"

export const Container = styled.section`
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 0.5rem calc((100vw - 1200px) / 2);
    height: 90vh;
    border-radius: .5rem;
    padding: 2rem 3rem;
`

export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
`

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;
    height: 100%;
    color: #101010;
    overflow: scroll;
`

export const Product = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    
    h2 {
        font-size: 1.2rem;
    }
    
    p { 
        font-size: .8rem;
        color: #535353;
    }
    
    img {
        object-fit: cover;
        width: 100%;
        min-height: 200px;
        max-height: 200px;
        margin-bottom: .7rem;
        border-radius: .5rem;
        overflow: hidden;
    }

    div {
        display: flex;
        align-items: center;
        
        p{
            font-size: .9rem;
            margin-right: .2rem;
        }
    }
`
