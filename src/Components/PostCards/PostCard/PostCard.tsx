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
      <Card sx={{ maxWidth: '100%', margin: '20px auto', backgroundColor: 'rgba(250,247,247,0.88)', borderRadius: '20px'}}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Created on {dayTime.data} at {dayTime.time}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{marginTop: '20px', textAlign: 'center'}}>
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{marginLeft: '10px', marginBottom: '10px'}}>
          <Button size="medium" color="primary" component={NavLink} to={`/posts/${post.id}`}>
            Read more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PostCard;