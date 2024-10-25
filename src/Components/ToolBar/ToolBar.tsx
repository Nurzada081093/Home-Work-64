import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const ToolBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: '#263238'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography color="inherit" to="/" variant="h6" component={NavLink}
                        sx={{flexGrow: 1, textDecoration: 'none', padding: '18px 0'}}>
              <img src="https://bayguzin.ru/demo2023/metrobank/assets/images/logo.png" alt="metrobank"/>
            </Typography>
            <Button color="inherit" to="/" component={NavLink}>Home</Button>
            <Button color="inherit" to="/posts/add" component={NavLink}>Add</Button>
            <Button color="inherit" to="/about" component={NavLink}>About</Button>
            <Button color="inherit" to="/contacts" component={NavLink}>Contacts</Button>
            <IconButton color="inherit" sx={{marginLeft: '20px'}}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;