import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';


const ToolBar = () => {
  return (
    <div>
      <Box sx={{flexGrow: 1, mb: 5}}>
        <AppBar position="static">
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
                          sx={{flexGrow: 1, textDecoration: 'none'}}>
                My Blog
              </Typography>
              <Button color="inherit" to="/" component={NavLink}>Home</Button>
              <Button color="inherit" to="/new-post" component={NavLink}>Add</Button>
              <Button color="inherit" to="/about" component={NavLink}>About</Button>
              <Button color="inherit" to="/contacts" component={NavLink}>Contacts</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default ToolBar;