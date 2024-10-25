import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { INewPost } from '../../types';
import { Textarea } from '@mui/joy';

const initialForm = {
  title: '',
  description: '',
};

interface Props {
  postToEdit?: INewPost | undefined;
  submitForm: (post: INewPost) => void;
}

const FormToAddNewPost: React.FC<Props> = ({postToEdit, submitForm}) => {
  const [newPost, setNewPost] = useState<INewPost>(initialForm);

  useEffect(() => {
    if (postToEdit) {
      setNewPost((prevState) => ({
        ...prevState,
        ...postToEdit,
      }));
    }
  }, [postToEdit]);

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
      datetime: String(new Date()),
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault();

    if (newPost.title.trim().length === 0 || newPost.description.trim().length === 0) {
      alert('Please enter a title and description!');
    } else {

      submitForm({...newPost});

      if (!postToEdit) {
        setNewPost({...initialForm});
      }
    }
  };

  return (
    <form onSubmit={onSubmit} style={{border: '1px solid lightgrey', width: '95%', margin: '0 auto 70px', padding: '50px 0', borderRadius: '20px', backgroundColor: 'white'}}>
      <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center', marginBottom: '20px'}}>
        {postToEdit ? 'Edit ' : 'Add new '} post
      </Typography>
      <Grid container spacing={2} sx={{mx: 'auto', width: '80%'}}>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Title"
            name="title"
            variant="outlined"
            value={newPost.title}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Textarea
            id="outlined-basic"
            variant="outlined"
            placeholder="Description..."
            minRows={5}
            value={newPost.description}
            name="description"
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Button sx={{width: '100%'}} variant="contained" type="submit">
            {postToEdit ? 'Edit' : 'Save'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormToAddNewPost;
