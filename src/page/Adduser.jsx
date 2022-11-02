import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/action';





function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function AddUser() {
    const navigate = useNavigate()
    const [error, seterror] = useState("")

    const users = useSelector(state => state.data.users)
console.log(users.length + 1);
      const dispatch = useDispatch();

    const [details, setdetails] = useState({
        id: users.length++,
        name: "",
        email: "",
        address: "",
        contact: ""
    })


    const { id, name, email, address, contact } = details


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setdetails({...details, [name]: value })
        console.log(details);
    }



    const handleSubmit = (event) => {
        event.preventDefault();

        if (  !name || !email || !address || !contact) {
            seterror("Please Fill The required Feild")
        } else {
            dispatch(addUser(details))
            seterror("")
            navigate("/")
        }



    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add User Details
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <form onSubmit={handleSubmit}>

                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        required
                                        value={name}
                                        id="name"
                                        type="text"
                                        name="name"
                                        label="Enter User Name"
                                        autoFocus

                                        onChange={handleInputChange}


                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="email"
                                        value={email}
                                        id="Email"
                                        label="Enter  Email "
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="contact"
                                        label="Contact Number"
                                        value={contact}
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="address"
                                        value={address}
                                        onChange={handleInputChange}

                                        label="Enter User Address"

                                    />
                                </Grid>

                            </Grid>
                            <Grid item xs={12}>
                                <p style={{color: "red"}}>
                                {error}
                                </p>
                            </Grid>
                            <Button
                                type="submit"

                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save
                            </Button>
                            <Button
                                onClick={() => navigate("/")} variant="contained"
                                sx={{ mt: 3, mb: 2, ml: 3 }}
                            >
                                Go Back
                            </Button>

                        </form>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}