import PostCard from './PostCard/PostCard.tsx';
import { IPost } from '../../types';
import React from 'react';

interface Props {
  posts: IPost[];
}

const PostCards: React.FC<Props> = ({posts}) => {
  return (
    posts.map((post) => (
      <PostCard key={post.id} post={post}/>
    ))
  );
};

export default PostCards;