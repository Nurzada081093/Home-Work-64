import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { DataTime, IPost } from '../../types';
import React from 'react';
import DateFormat from '../../Constants.ts';

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({post}) => {
  const data: DataTime = DateFormat(post.datetime);

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component="div"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            {data.data}
          </Box>
          <Box
            component="div"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            {data.time}
          </Box>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default Post;