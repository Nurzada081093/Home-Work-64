import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: '#263238'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography color="inherit" to="/" variant="h6" component={NavLink}
                        sx={{flexGrow: 1, textDecoration: 'none', padding: '20px 0 5px 0'}}>
              <img src="https://bayguzin.ru/demo2023/metrobank/assets/images/logo.png" alt="metrobank"/>
            </Typography>
            <p>Copyright 2023 by MertoBank. All Right Reserved.</p>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>

  );
};

export default Footer;