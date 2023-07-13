import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import ButtonDefault from "./components/Button";
import Form from "./components/Form";

const Login: React.FC = () => {
    return (
        <Grid
            xs={12}
            width="100vw"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            display="flex"
            bgcolor="#f2f2f2"
        >
            <Grid height="80%" width="30%" xs={12} sm={6}>
                <Grid
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
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
                    <Grid xs={12} marginBottom="50px">
                        <Typography variant="h4">Acessar App Finanças</Typography>
                    </Grid>
                    <Form mode="signin" textButton="Logar" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login;
