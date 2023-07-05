import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

import ButtonDefault from "./Button";

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <AddCircleIcon sx={{ fontSize: "50px" }} />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid
                        xs={12}
                        width="100%"
                        display="flex"
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Typography variant="h6">Cadastrar</Typography>
                        <Grid xs={12} marginBottom="20px" marginTop={5} width="100%">
                            <TextField variant="outlined" type="number" label="Valor" fullWidth />
                        </Grid>
                        <Grid xs={12} marginBottom="5px" width="100%">
                            <TextField variant="outlined" type="text" label="Descrição" fullWidth />
                        </Grid>
                        <ButtonDefault title="Cadastrar" />
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
