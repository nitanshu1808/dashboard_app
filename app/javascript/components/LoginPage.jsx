import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import SendosoLogo from './sendoso-logo.png';

const LoginPage = (props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    formRef.current.submit();
  }
  const formRef = React.createRef();

  return (
    <Paper sx={{ margin: '100px auto', padding: '20px', width: 300 }}>
      <img style={{ display: 'block', width: '170px', margin: '0 auto' }} src={SendosoLogo} />

      <Typography sx={{ textAlign: 'center', p: 2 }}>Welcome Back!</Typography>

      <form action={props.url} method="POST" ref={formRef}>
        <input type="hidden" name="authenticity_token" value={props.token} />

        <FormControl variant="standard" fullWidth sx={{ mt: 1 }}>
          <InputLabel>Email</InputLabel>
          <Input name="user[email]" />
        </FormControl>

        <FormControl variant="standard" fullWidth sx={{ mt: 1 }}>
          <InputLabel>Password</InputLabel>
          <Input type="password" name="user[password]" />
        </FormControl>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            type="submit"
            onClick={handleClick}
            disabled={loading}
            endIcon={(loading) ? <CircularProgress size={20} /> : <LoginIcon />}
            sx={{ mt: 4 }}>
            Login
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default LoginPage;
