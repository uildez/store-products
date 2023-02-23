import React from 'react'
import { BtnProfile, Card, CardDisabled, Container, Grid, Profile } from './homeStyles'
import { FaBox, FaCar, FaInbox, FaPhoneAlt, FaUserCircle, FaUserPlus } from 'react-icons/fa';

export const Home = () => {
    return (
        <Container>
            <Profile>
                <img
                    style={{ borderRadius: "5rem", height: "100px" }}
                    src="https://avatars.githubusercontent.com/u/81888958?v=4"
                    alt="Foto Uildes Demétrio"
                />
                <div>
                    <h2>Uildes Demétrio</h2>
                    <p>Desenvolvedor Front-end</p>
                </div>
                <BtnProfile to="/">Sair do Perfil</BtnProfile>
            </Profile>
            <Grid>
                <Card to="/products">
                    <FaBox />
                    <h2>Produtos</h2>
                    <p>Adicionar, pesquisar ou editar produtos</p>
                </Card>
                <CardDisabled to="/">
                    <FaUserPlus />
                    <h2>Cadastro de Cliente</h2>
                    <p>Clique aqui para adicionar ou editar produtos</p>
                </CardDisabled>
                <CardDisabled to="/">
                    <FaPhoneAlt />
                    <h2>Chamadas</h2>
                    <p>Confira as chamadas pendentes, realizadas ou finalizadas</p>
                </CardDisabled>
                <CardDisabled to="/">
                    <FaCar />
                    <h2>Entrega</h2>
                    <p>Entregas pendentes, em andamento e finalizadas</p>
                </CardDisabled>
                <CardDisabled to="/">
                    <FaInbox />
                    <h2>Suporte</h2>
                    <p>Em caso de problemas técnicos entre me contato com o suporte</p>
                </CardDisabled>
                <CardDisabled to="/">
                    <FaUserCircle />
                    <h2>Perfil</h2>
                    <p>Gerencie seu perfil</p>
                </CardDisabled>
            </Grid>
        </Container>
    )
}
