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

export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    div{
        display: flex;
        max-width: 100%;
        gap: 1rem;
        
        @media screen and (max-width: 768px) {
            gap: 0;
            margin-top: 1rem;
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;        
    }
`

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: relative;
    gap: 2rem;
    width: 100%;
    height: 100%;
    color: #101010;
    overflow-y: scroll;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;        
    }
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


export const InputStyled = styled.input`
    background: #fff;
    color: #101010;
    border: solid #00BEED;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 1.5rem;
    padding-left: 1rem;
    height: 60px;
    border-radius: .5rem;

    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #101010;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem .7rem;
    }
`

export const Select = styled.select`
    background: #fff;
    color: #7a7a7a;
    border: solid #00BEED;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 1.5rem;
    height: 60px;
    border-radius: .5rem;
    font-size: 14px;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
    
    @media screen and (max-width: 768px) {
        padding: 1rem .7rem;
    }   
`;

export const ActionButtons = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        gap: .2rem;
        border-radius: .5rem;
        border: none;
        padding: .6rem 1rem;
        width: 100%;
        white-space: nowrap;
        cursor: pointer;
        margin-top: .5rem;
    }

`
export const BtnEdit = styled.button`
    background-color: #00ca33;
    color: #fff;
    
    &:hover{
        transition: all .2s ease-in-out;
        background-color: #00a82a;
    }
`

export const BtnDelete = styled.button`
    background-color: #cc0909;
    color: #fff;
    
    &:hover{
        transition: all .2s ease-in-out;
        background-color: #a10909;
    }
`

export const Tab = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    
    p{
        color: #101010;
        padding-bottom: "1rem"
    }
`

export const BtnAdd = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    background: #00BEED;
    color: #fff;
    padding: .8rem 1rem;
    border-radius: .5rem;
    font-size: 1rem;
    cursor: pointer;
    border: 0px;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #00A8D7;
    }
`

export const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    margin-top: 4rem;
    font-size: 1.2rem;
    text-align: center;
    gap: 2rem;
    align-items: center;
    top: 0;
    justify-content: center;
`