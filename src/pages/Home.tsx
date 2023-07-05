import { Grid } from "@mui/material";
import React from "react";

import ButtonAppBar from "./components/AppBar";
import BasicModal from "./components/BasicModal";
import buscarDadosDoLocalStorage from "../utils/buscarDados";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const userLogged = buscarDadosDoLocalStorage("userLogged");

    if (!userLogged.email) {
        navigate("/");
    }

    return (
        <>
            <Grid xs={12}>
                <ButtonAppBar />
            </Grid>
            <Grid
                xs={12}
                width="100vw"
                height="90vh"
                display="flex"
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <BasicModal />
            </Grid>
        </>
    );
};

export default Home;
