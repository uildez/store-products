import { MdClose } from "react-icons/md";
import styled from "styled-components"


export const Model = styled.div`
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

export const Container = styled.div`
    position: fixed;
    background: #fff;
    width: 50%;
    border-radius: 10px;
    padding: 0.75rem;
    transform: translate(50%, 50%);
    color: #00BEED;
    padding: 1rem 2rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .5rem;

    div {
        width: 100%;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
    }

    input, select{
        width: 100%;
        background: #fff;
        color: #00BEED;
        border: solid #00BEED;
        font-size: 1rem;
        cursor: pointer;
        padding: .5rem 0rem;
        padding-left: 1rem;
        border-radius: .5rem;
        
        &:hover {
            transition: all 0.2s ease-in-out;
            color: #00A8D7;
        }
    }
`

export const BtnSave = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 20%;
    right: 0;
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

export const Close = styled(MdClose)`
    background: #00A8D7;
    color: #fff;
    border-radius: .3rem;
    font-size: 1.5rem;
    cursor: pointer;
    
    &:hover{
        background: #00BEED;
        transition: all 0.2s ease-in-out;
    }
`