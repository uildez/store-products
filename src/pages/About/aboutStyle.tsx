import styled from "styled-components"

export const Container = styled.section`
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 1rem 4rem;
    padding: 2rem 3rem;
    height: 90vh;
    border-radius: .5rem;
    
    @media screen and (max-width: 768px) {
        padding: 1rem;
        margin: 1rem 2rem;
    }
`