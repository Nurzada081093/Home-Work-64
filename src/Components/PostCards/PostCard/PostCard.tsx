import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { DataTime, IPost } from '../../../types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DateFormat from '../../../Constants.ts';

interface Props {
  post: IPost;
}

const PostCard: React.FC<Props> = ({post}) => {

  const dayTime: DataTime = DateFormat(post.datetime);

  return (
    <>
      <Card sx={{ maxWidth: '80%', margin: '20px auto' }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Created on: {dayTime.data} at {dayTime.time}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{margin: '20px 0'}}>
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={NavLink} to={`/posts/${post.id}`}>
            Read more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PostCard;