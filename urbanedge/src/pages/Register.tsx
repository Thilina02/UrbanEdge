
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Register() {
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');
  const [Mnumber, setMnumber] = useState('');
  const [password, setPassword] = useState('');
  const [policy, setPolicy] = useState<boolean>(false);
  const [successmessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        setFname(value);
        break;
      case 'lastName':
        setLname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setMnumber(value);
        break;
      // Add cases for other input fields if needed
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  {/* 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };*/}

    const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8070/users/registerUser', {
        Fname,
        Lname,
        Email,
        Mnumber,
        password,
        Checkbox,
      });

      console.log(response.status);
      if(response.status === 200){
        setSuccessMessage('Your post submitted successfully')
        setErrorMessage('');
        navigate({ ///${response.data._id}
          pathname: `/Listing-success`,
        });
      }
    } catch(error){
      console.error('Error:', error);
      // Handle errors here
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
          <Navbar/>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography >
          <form onSubmit={handleSubmit}>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={Fname}
                 onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={Lname}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={Email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Mobile number"
                  name="phone"
                  value={Mnumber}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="subscribe"
                    color="primary"
                    checked={policy}
                    onChange={handleInputChange}
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link component={RouterLink} to="/SignIn" variant="body2">
              Already have an account? Sign in
            </Link>
              </Grid>
            </Grid>
          </Box>
          </form>
        </Box>

         
          
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}