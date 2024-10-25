import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPost } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import Post from '../../Components/Post/Post.tsx';

const ReadMore = () => {
  const [onePost, setOnePost] = useState<IPost>();
  const params = useParams<{id: string}>();

  const getOnePost = useCallback(async (id: string) => {

    try {
      const responsePost: {data: IPost} =  await axiosAPI<IPost>(`posts/${id}.json`);
      const postInfo = responsePost.data;

      if (postInfo) {
        setOnePost(postInfo);
      }

    } catch (e) {
      alert(e);
    }

  }, []);

  useEffect(() => {
    if (params.id !== undefined) {
      void getOnePost(params.id);
    }
  }, [getOnePost, params]);


  return (
    <>
      {onePost !== undefined ? <Post post={onePost}/> : null}
    </>
  );
};

export default ReadMore;