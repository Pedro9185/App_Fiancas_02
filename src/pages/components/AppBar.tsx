import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("userLogged");
        navigate("/");
        console.log("rodando");
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        App Finanças
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit" onClick={() => logout()}>
                        Sair
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
