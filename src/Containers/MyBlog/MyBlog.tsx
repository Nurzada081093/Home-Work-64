import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import { Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import Add from '../Add/Add.tsx';
import About from '../About/About.tsx';
import Contacts from '../Contacts/Contacts.tsx';
import ReadMore from '../ReadMore/ReadMore.tsx';
import EditPost from '../EditPost/EditPost.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const MyBlog = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main style={{ padding: '4% 0' }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Home />}>
            <Route path=":id" element={<ReadMore />}></Route>
            <Route path=":id/edit" element={<EditPost />} ></Route>
          </Route>
          <Route path="/posts/add" element={<Add />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contacts" element={<Contacts />} ></Route>
          <Route path="*" element={<Typography variant="h1">Not found</Typography>} ></Route>
        </Routes>
      </main>
      <footer style={{marginTop: '-55px'}}>
        <Footer/>
      </footer>
    </>
  );
};

export default MyBlog;

