import { Grid } from "@mui/material";
import React from "react";

import buscarDadosDoLocalStorage from "../utils/buscarDados";
import { useNavigate } from "react-router-dom";

import BasicAppBar from "./components/AppBar";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const userLogged = buscarDadosDoLocalStorage("userLogged");

    if (!userLogged.email) {
        navigate("/");
    }

    return (
        <>
            <BasicAppBar />
        </>
    );
};

export default Home;
