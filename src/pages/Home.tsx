import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";

import buscarDadosDoLocalStorage from "../utils/buscarDados";
import { useNavigate } from "react-router-dom";

import BasicAppBar from "./components/AppBar";
import UserType from "../types/UserType";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const userLogged = buscarDadosDoLocalStorage("userLogged");

    useEffect(() => {
        if (!userLogged.email) {
            navigate("/");
        }
    }, [userLogged]);

    return (
        <>
            <Box height="100vh" width="100vw" bgcolor="ButtonShadow">
                <BasicAppBar />
                <Grid
                    container
                    width="100%"
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TextField label="Descrição" variant="standard" />
                    <TextField label="Valor" variant="standard" />
                    <Button variant="outlined">Cadastrar</Button>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
