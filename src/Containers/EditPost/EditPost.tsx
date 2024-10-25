import FormToAddNewPost from '../../Components/FormToAddNewPost/FormToAddNewPost.tsx';
import { useCallback, useEffect, useState } from 'react';
import { INewPost, IPost } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import Louder from '../../Components/UI/Louder/Louder.tsx';

const EditPost = () => {
  const [louder, setLouder] = useState<boolean>(false);
  const [onePostInformation, setOnePostInformation] = useState<IPost>();
  const navigate = useNavigate();

  const params = useParams<{id: string}>();

  const getOnePost = useCallback(async () => {

    try {
      setLouder(true);
      const responsePost: {data: IPost} =  await axiosAPI<IPost>(`posts/${params.id}.json`);
      const postInfo = responsePost.data;

      if (postInfo) {
        setOnePostInformation(postInfo);
      }

    } catch (e) {
      alert(e);
    } finally {
      setLouder(false);
    }

  }, [params.id]);

  useEffect(() => {
    if (params.id !== undefined) {
      void getOnePost();
    }
  }, [getOnePost, params.id]);

  const submitForm = async (post: INewPost) => {
    try {
      if (params.id) {
        setLouder(true);
        await axiosAPI.put(`posts/${params.id}.json`, {...post});
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLouder(false);
    }
  };

  return (
    <>
      {louder ?
        (<Louder/>)
        :
        (onePostInformation !== undefined ?
          <FormToAddNewPost postToEdit={onePostInformation} submitForm={submitForm}/>
          :
          null
        )
      }
    </>
  );
};

export default EditPost;
