import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserType from "../../types/UserType";
import buscarDadosDoLocalStorage from "../../utils/buscarDados";
import armazenarDadosUsuarioLocalStorage from "../../utils/ArmazenarDados";

interface FormProps {
    mode: "signin" | "signup";
    textButton: string;
}

const Form: React.FC<FormProps> = ({ mode, textButton }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [disabled, setDisable] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepassword, setErrorRepassword] = useState(false);
    const navigate = useNavigate();

    let usersList: UserType[] = buscarDadosDoLocalStorage("users");

    useEffect(() => {
        if (mode === "signup") {
            const emailValid =
                email.endsWith(".com") || (email.endsWith(".com.br") && email.includes("@"));

            const passwordValid = password.length >= 6;
            const repasswordValid = password === repassword;

            if (email.length > 0) {
                setErrorEmail(!emailValid);
            }

            if (password.length > 0) {
                setErrorPassword(!passwordValid);
            }

            if (repassword.length > 0) {
                setErrorRepassword(!repasswordValid);
            }
            setDisable(!(emailValid && passwordValid && repasswordValid));
        }
    }, [email, password, repassword, mode]);

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (mode === "signin") {
            const userExist = usersList.find(
                (value) => value.email === email && value.password === password,
            );

            if (!userExist) {
                alert("Usuario ou senha não existem");
                return;
            }
            armazenarDadosUsuarioLocalStorage("userLogged", userExist);

            navigate("/home");
        } else {
            const newUser: UserType = {
                email,
                password,
                transactions: [],
            };

            const exist = usersList.some((value) => value.email === email);

            if (exist) {
                alert("Email já cadastrado");
                return;
            }
            usersList.push(newUser);

            armazenarDadosUsuarioLocalStorage("users", usersList);

            alert("Usuario cadastrado com sucesso");

            navigate("/");
        }
    };

    return (
        <>
            <Box component="form" marginTop={1} onSubmit={(ev) => handleSubmit(ev)}>
                <TextField
                    error={errorEmail}
                    helperText={errorEmail ? "E-mail inválido" : ""}
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                    margin="normal"
                    variant="standard"
                    type="email"
                    required
                    id="email"
                    label="E-mail"
                    fullWidth
                />
                <TextField
                    error={errorPassword}
                    helperText={errorPassword ? "A senha deve ter no mínimo 6 caracteres" : ""}
                    value={password}
                    onChange={(evento) => setPassword(evento.target.value)}
                    margin="normal"
                    variant="standard"
                    type="password"
                    required
                    id="password"
                    label="Password"
                    fullWidth
                />
                {mode === "signup" ? (
                    <TextField
                        error={errorRepassword}
                        helperText={errorRepassword ? "As senhas não são iguais" : ""}
                        value={repassword}
                        onChange={(evento) => setRepassword(evento.target.value)}
                        margin="normal"
                        variant="standard"
                        type="password"
                        required
                        id="repassword"
                        label="Repeat Password"
                        fullWidth
                    />
                ) : (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={remember}
                                onChange={(evento) => setRemember(evento.target.checked)}
                            />
                        }
                        label="Permanecer conectado"
                    />
                )}
                <Button
                    disabled={disabled}
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                >
                    {textButton}
                </Button>

                <Grid container>
                    <Grid item xs={8} textAlign="end">
                        {mode === "signin" ? (
                            <Typography variant="body2">
                                <Link to="/signup">Não tem uma conta? Cadastre-se</Link>
                            </Typography>
                        ) : (
                            <Typography variant="body2">
                                <Link to="/">Já possui conta? Vá para Login</Link>
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Form;
