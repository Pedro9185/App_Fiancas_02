import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import ButtonDefault from "./components/Button";
import Form from "./components/Form";

const Login: React.FC = () => {
    return (
        <Grid
            width="100vw"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            display="flex"
            bgcolor="#f2f2f2"
        >
            <Grid height="80%" xs={8} sm={8}>
                <Grid
                    xs={6}
                    sm={10}
                    spacing={2}
                    display="flex"
                    flexDirection="column"
                    bgcolor="#fff"
                    width="100%"
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="20px"
                >
                    <Grid xs={10} marginBottom="50px">
                        <Typography variant="h5">Acessar App Finanças</Typography>
                    </Grid>
                    <Form mode="signin" textButton="Logar" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login;
