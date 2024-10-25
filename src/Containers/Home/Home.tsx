import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import PostCards from '../../Components/PostCards/PostCards.tsx';
import { Box } from '@mui/material';
import Louder from '../../Components/UI/Louder/Louder.tsx';

const Home = () => {
  const [louder, setLouder] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async () => {

    try {
      setLouder(true);
      const responsePosts: {data: IPostAPI} =  await axiosAPI<IPostAPI>('posts.json');
      const postsData = responsePosts.data;

      if (postsData) {
        const postsInfoFromAPI = Object.keys(postsData).map((postInfo) => {
          return {
            ...responsePosts.data[postInfo],
            id: postInfo,
          };
        });

        setPosts(postsInfoFromAPI);
      }
    } catch (e) {
      alert(e);
    } finally {
      setLouder(false);
    }
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);

  return (
    <>
      {
        louder ?
          <Louder/>
          :
          <Box>
          {posts.length > 0 ? <PostCards posts={posts}/> : <p>There are no posts!</p>}
        </Box>
      }
    </>
  );
};

export default Home;