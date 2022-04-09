import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/UseAuth';

const Login = () => {
    const { signUsingGoogle, loginUser, user, isLoading, authError } = useAuth()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    let location = useLocation();
    let navigate = useNavigate();

    const handleLoginSubmit = e => {
        console.log(loginData);
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signUsingGoogle(location, navigate)
        console.log(location);
    }
    return (
        <>

            <Container className='from'>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                        <Typography variant="body1" style={{ fontSize: "3rem", color: "#33383b", }} gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ backgroundColor: "black" }} variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none', display: "block" }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <Typography>
                            <Button onClick={handleGoogleLogin} variant="contained" style={{ margin: "50px", backgroundColor: "black" }} >Google SignIn</Button>
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;