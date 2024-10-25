import FormToAddNewPost from '../../Components/FormToAddNewPost/FormToAddNewPost.tsx';
import { useNavigate } from 'react-router-dom';
import { INewPost } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useState } from 'react';
import Louder from '../../Components/UI/Louder/Louder.tsx';

const Add = () => {
  const [louder, setLouder] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (post: INewPost) => {

    try {
      setLouder(true);
      await axiosAPI.post('posts.json', {...post});
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLouder(false);
    }
  };

  return (
    <>
      {louder ? (
        <Louder/>
        ) : (
        <FormToAddNewPost submitForm={submitForm}/>
      )
      }
    </>
  );
};

export default Add;