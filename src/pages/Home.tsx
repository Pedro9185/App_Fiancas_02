import { Grid } from "@mui/material";
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
            <BasicAppBar />
        </>
    );
};

export default Home;
