import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { DataTime, IPost } from '../../types';
import React, { useState } from 'react';
import DateFormat from '../../Constants.ts';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import Louder from '../UI/Louder/Louder.tsx';

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({post}) => {
  const [louder, setLouder] = useState<boolean>(false);
  const data: DataTime = DateFormat(post.datetime);
  const navigate = useNavigate();

  const params = useParams<{id: string}>();

  const deletePost = async () => {
    try {
      setLouder(true);
      if (params.id) {
        await axiosAPI.delete(`posts/${params.id}.json`);
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLouder(false);
    }
  };

  return (
    louder ? (
        <Louder/>
      ) : (
        <Card sx={{ maxWidth: '100%' }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, display: 'flex', justifyContent: 'space-between' }}>
              <Box component="div" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>{data.data}</Box>
              <Box component="div" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>{data.time}</Box>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">{post.title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" to={`/`} component={NavLink} onClick={deletePost}>Delete</Button>
            <Button size="small" to={`/posts/${params.id}/edit`} component={NavLink}>Edit</Button>
          </CardActions>
        </Card>
    )
  );
};

export default Post;