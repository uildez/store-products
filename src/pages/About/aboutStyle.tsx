import styled from "styled-components"

export const Container = styled.section`
    background: #fff;
    color: #00BEED;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 1rem 4rem;
    padding: 2rem 3rem;
    border-radius: .5rem;
    
    @media screen and (max-width: 768px) {
        padding: 1rem;
        margin: 1rem 2rem;
    }

    h2{
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 2rem;
        width: 100%;

        a {
            color: #00BEED;
        }

        svg {
            &:hover{
                color: #0094bd;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
            }
        }
    }
`