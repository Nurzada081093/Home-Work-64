import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async () => {
    try {
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
    }
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);


  console.log(posts);

  return (
    <div>
      Главная страница
    </div>
  );
};

export default Home;