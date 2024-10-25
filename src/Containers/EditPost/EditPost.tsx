import FormToAddNewPost from '../../Components/FormToAddNewPost/FormToAddNewPost.tsx';
import { useCallback, useEffect, useState } from 'react';
import { INewPost, IPost } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';

const EditPost = () => {
  const [onePostInformation, setOnePostInformation] = useState<IPost>();
  const navigate = useNavigate();

  const params = useParams<{id: string}>();

  const getOnePost = useCallback(async () => {

    try {
      const responsePost: {data: IPost} =  await axiosAPI<IPost>(`posts/${params.id}.json`);
      const postInfo = responsePost.data;

      if (postInfo) {
        setOnePostInformation(postInfo);
      }

    } catch (e) {
      alert(e);
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
        // setLouding(true);
        await axiosAPI.put(`posts/${params.id}.json`, {...post});
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    } finally {
      // setLouding(false);
    }
  };

  return (
    <>
      {onePostInformation !== undefined ? <FormToAddNewPost postToEdit={onePostInformation} submitForm={submitForm}/> : null}
    </>
  );
};

export default EditPost;
