import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import Add from '../Add/Add.tsx';
import About from '../About/About.tsx';
import Contacts from '../Contacts/Contacts.tsx';

const MyBlog = () => {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <Container maxWidth="lg" sx={{width: '84%'}}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/posts" element={<Home/>}></Route>
          <Route path="/new-post" element={<Add/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          {/*<Route path="/games/:idGame/edit" element={<EditGame/>}></Route>*/}
          {/*<Route path="*" element={<Typography variant="h1">Not found</Typography>}></Route>*/}
        </Routes>
      </Container>
    </>
  );
};

export default MyBlog;