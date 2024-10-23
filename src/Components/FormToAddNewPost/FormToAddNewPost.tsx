import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Textarea from '@mui/joy/Textarea';
import * as React from 'react';
import { useState } from 'react';
import { INewPost } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const initialForm = {
  title: '',
  description: '',
  message: '',
};

const FormToAddNewPost = () => {
  const [newPost, setNewPost] = useState<INewPost>(initialForm);

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
      datetime: String(new Date()),
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axiosAPI.post('posts.json', {...newPost});

    setNewPost(initialForm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center', marginBottom: '20px'}}>
          {/*{gameToEdit ? 'Edit ' : 'Add new '} game*/}
          Add new post
        </Typography>

        <Grid container spacing={2} sx={{mx: 'auto', width: '50%'}}>
          <Grid size={12}>
            <TextField
              sx={{width: '100%'}}
              id="outlined-basic"
              label="Title"
              name="title"
              variant="outlined"
              value={newPost.title}
              onChange={onChangeField}
              required
            />
          </Grid>
          <Grid size={12}>
            <TextField
              sx={{width: '100%'}}
              id="outlined-basic"
              label="Description"
              name="description"
              variant="outlined"
              value={newPost.description}
              onChange={onChangeField}
              required
            />
          </Grid>
          <Grid size={12}>
            <Textarea
              placeholder="Message..."
              minRows={4}
              value={newPost.message}
              name="message"
              onChange={onChangeField}
              required
            />
          </Grid>
          <Grid size={12}>
            <Button sx={{width: '100%'}} variant="contained" type="submit">
              {/*{gameToEdit ? 'Edit' : 'Add'}*/}
              save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormToAddNewPost;