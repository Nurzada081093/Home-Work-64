import FormToAddNewPost from '../../Components/FormToAddNewPost/FormToAddNewPost.tsx';
import { useNavigate } from 'react-router-dom';
import { INewPost } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const Add = () => {

  // const [louding, setLouding] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (post: INewPost) => {
    console.log(post);
    try {
      // setLouding(true);
      await axiosAPI.post('posts.json', {...post});
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      // setLouding(false);
    }
  };

  return (
    <>
      <FormToAddNewPost submitForm={submitForm}/>
    </>
  );
};

export default Add;