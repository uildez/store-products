import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiFramer, SiJest, SiRedux, SiStyledcomponents, SiTypescript, SiVite } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { Container } from './aboutStyle'

export const About = () => {
    return (
        <Container>
            <h2>Sobre o Projeto</h2>
            <p>O projeto se trata de uma aplicação web de controle de estoque de produtos usando React TS. Sendo possível adicionar, editar e remover produtos utilizando do Redux com Redux Toolkit. Podendo buscar produtos por nome,
                categoria e preço.<br /><br /> A página inicial contém uma barra superior com as seguintes rotas criadas com React Router: Home, Sobre e Produtos posteriormente vindo a ter mais páginas e funcionalidades. Testes são desenvolvidos com Jest e estilização com Styled Component.</p>
            <div>
                <Link to='https://vitejs.dev' target='_blank'>
                    <SiVite />
                </Link>

                <Link to='https://reactjs.org/docs/getting-started.html' target='_blank'>
                    <FaReact />
                </Link>

                <Link to='https://www.typescriptlang.org/pt/docs/handbook/react.html' target='_blank'>
                    <SiTypescript />
                </Link>

                <Link to='https://redux.js.org' target='_blank'>
                    <SiRedux />
                </Link>

                <Link to='https://styled-components.com/docs/basics' target='_blank'>
                    <SiStyledcomponents />
                </Link>

                <Link to='https://jestjs.io/docs/getting-started' target='_blank'>
                    <SiJest />
                </Link>

                <Link to='https://www.framer.com/motion/' target='_blank'>
                    <SiFramer />
                </Link>
            </div>
        </Container>
    )
}
