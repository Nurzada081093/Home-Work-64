import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import PostCards from '../../Components/PostCards/PostCards.tsx';
import { Container, Typography } from '@mui/material';
import Louder from '../../Components/UI/Louder/Louder.tsx';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

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
    <Container sx={{marginBottom: '70px'}}>
      <Typography variant="h2" sx={{color: 'whitesmoke', fontWeight: 600, margin: '10px 0 20px 200px'}}>All posts</Typography>
      <Grid container spacing={1} sx={{display: 'flex', justifyContent: 'space-around'}}>
        <Grid size={6} sx={{marginLeft: '20px'}}>
          {louder ? (
            <Louder />
          ) : posts.length > 0 ? (
            <PostCards posts={posts} />
          ) : (
            <Typography variant="h6">There are no posts!</Typography>
          )}
        </Grid>
        <Grid size={5} sx={{marginTop: '20px'}}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

