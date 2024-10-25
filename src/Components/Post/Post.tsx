import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { DataTime, IPost } from '../../types';
import React, { useState } from 'react';
import DateFormat from '../../Constants.ts';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import Louder from '../UI/Louder/Louder.tsx';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteIcon from '@mui/icons-material/Delete';

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
      alert(e);
    } finally {
      setLouder(false);
    }
  };

  return (
    louder ? (
        <Louder/>
      ) : (
        <Card sx={{ maxWidth: '90%', borderRadius: '20px', padding: '10px' }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18, display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <Box component="div" sx={{ display: 'flex', alignItems: 'center', transform: 'scale(0.8)'}}>
                <CalendarMonthIcon sx={{marginRight: '10px'}} fontSize="medium"/>
                <Box>{data.data}</Box>
              </Box>
              <Box component="div" sx={{ display: 'flex', alignItems: 'center', mx: '2px', transform: 'scale(0.8)'}}>
                <AccessTimeIcon sx={{marginRight: '10px'}} fontSize="medium"/>
                <Box>{data.time}</Box>
              </Box>
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', marginBottom: '10px'}}>{post.title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{post.description}</Typography>
          </CardContent>
          <CardActions sx={{margin: '0 auto', width: '300px', display: 'flex', justifyContent: 'space-around',}}>
            <Button variant="outlined" startIcon={<DeleteIcon />} to={`/`} component={NavLink} onClick={deletePost}>
              Delete
            </Button>
            <Button variant="outlined" to={`/posts/${params.id}/edit`} component={NavLink} sx={{width: '100px'}}> Edit </Button>
          </CardActions>
          <Outlet/>
        </Card>
      )
  );
};

export default Post;


