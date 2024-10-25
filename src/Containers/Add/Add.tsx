import FormToAddNewPost from '../../Components/FormToAddNewPost/FormToAddNewPost.tsx';
import { useNavigate } from 'react-router-dom';
import { INewPost } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useState } from 'react';
import Louder from '../../Components/UI/Louder/Louder.tsx';
import { Container } from '@mui/material';

const Add = () => {
  const [louder, setLouder] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (post: INewPost) => {

    try {
      setLouder(true);
      await axiosAPI.post('posts.json', {...post});
      navigate('/');
    } catch (e) {
      alert(e);
    } finally {
      setLouder(false);
    }
  };

  return (
    <Container>
      {louder ? (
        <Louder/>
        ) : (
        <FormToAddNewPost submitForm={submitForm}/>
      )
      }
    </Container>
  );
};

export default Add;