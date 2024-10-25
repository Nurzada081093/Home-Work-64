import { Box, Container, Typography } from '@mui/material';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useCallback, useEffect, useState } from 'react';
import Louder from '../../Components/UI/Louder/Louder.tsx';

const Contacts = () => {
  const [contactPage, setContactPage] = useState<IPost[]>([]);
  const [louder, setLouder] = useState<boolean>(false);

  const getPosts = useCallback(async () => {

    try {
      setLouder(true);
      const responsePosts: {data: IPostAPI} =  await axiosAPI<IPostAPI>('contacts.json');
      const postsData = responsePosts.data;

      if (postsData) {
        const postsInfoFromAPI= Object.keys(postsData).map((postInfo) => {
          return {
            ...responsePosts.data[postInfo],
            id: postInfo,
          };
        });

        setContactPage(postsInfoFromAPI);
      }
    } catch (e) {
      alert(e);
    } finally {
      setLouder(false);
    }
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);

  let allContactPage = (
    <div>No page</div>
  );

  if (contactPage.length > 0) {
    allContactPage = (
      <>
        {contactPage.map((page) => (
          <>
            <div key={page.id} style={{
              background: 'url(https://as2.ftcdn.net/v2/jpg/03/39/06/67/1000_F_339066729_zCf9icIjEsSEIWwCxr2ytFlCO17H74cx.jpg) center center no-repeat',
              backgroundSize: 'cover',
              marginTop: '-55px',
              backgroundColor: 'rgba(112,109,101,0.67)'
            }}>
              <div style={{backgroundColor: 'rgba(112,109,101,0.67)', padding: '5%'}}>
                <Container sx={{textAlign: 'center', color: 'white'}}>
                  <h1 style={{fontSize: '50px'}}> Contact Details <br/> <span style={{textTransform: 'uppercase'}}>Metro Bank</span>
                  </h1>
                </Container>
              </div>
            </div>
            <div style={{backgroundColor: 'whitesmoke', marginTop: '-20px'}}>
              <Container>
                <Box sx={{padding: '5% 0'}}>
                  <Typography gutterBottom variant="h2" component="div"
                              sx={{
                                margin: '20px auto',
                                textAlign: 'center',
                                width: '70%',
                                fontWeight: '600',
                                paddingBottom: '40px'
                              }}>
                    {page.title}
                  </Typography>
                  <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    <div style={{
                      border: '1px solid grey',
                      borderRadius: '20px',
                      textAlign: 'center',
                      padding: '50px 20px',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <img width="64" height="64" src="https://img.icons8.com/cotton/64/location--v4.png"
                             alt="location--v4"/>
                      </div>
                      <h3>Our Location</h3>
                      <p style={{width: '200px'}}>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                    </div>
                    <div style={{
                      border: '1px solid grey',
                      borderRadius: '20px',
                      textAlign: 'center',
                      padding: '50px 20px',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <img width="64" height="64"
                             src="https://img.icons8.com/external-justicon-flat-justicon/64/external-email-notifications-justicon-flat-justicon.png"
                             alt="external-email-notifications-justicon-flat-justicon"/>
                      </div>
                      <h3>Email Address</h3>
                      <p style={{width: '200px'}}>contact@example.com</p>
                      <p style={{width: '200px'}}>support@example.com</p>
                    </div>
                    <div style={{
                      border: '1px solid grey',
                      borderRadius: '20px',
                      textAlign: 'center',
                      padding: '50px 20px',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <img width="64" height="64" src="https://img.icons8.com/papercut/50/ringer-volume.png"
                             alt="ringer-volume"/>
                      </div>
                      <h3>Phone Number</h3>
                      <p style={{width: '200px'}}>Emergency Cases</p>
                      <p style={{width: '200px'}}>+(208) 555-0112 (24/7)</p>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                    width='600' height='535' style={{width: '100%', margin: '5% 0', borderRadius: '20px'}}></iframe>
                  <div>
                    <Typography gutterBottom variant="h2" component="div"
                                sx={{
                                  margin: '20px auto',
                                  textAlign: 'center',
                                  width: '70%',
                                  fontWeight: '600',
                                  paddingBottom: '40px'
                                }}>
                      {page.description}
                    </Typography>
                    <form style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      width: '80%',
                      margin: '10px auto'
                    }}>
                      <input type="text" placeholder="Your name" style={{
                        width: '400px',
                        height: '40px',
                        padding: '10px 20px',
                        outline: 'none',
                        fontSize: '20px',
                        borderRadius: '10px',
                        border: '1px solid grey',
                        marginBottom: '40px'
                      }}/>
                      <input type="text" placeholder="Your email" style={{
                        width: '400px',
                        height: '40px',
                        padding: '10px 20px',
                        outline: 'none',
                        fontSize: '20px',
                        borderRadius: '10px',
                        border: '1px solid grey',
                        marginBottom: '40px'
                      }}/>
                      <input type="text" placeholder="Your phone" style={{
                        width: '400px',
                        height: '40px',
                        padding: '10px 20px',
                        outline: 'none',
                        fontSize: '20px',
                        borderRadius: '10px',
                        border: '1px solid grey',
                        marginBottom: '40px'
                      }}/>
                      <input type="text" placeholder="Your subject" style={{
                        width: '400px',
                        height: '40px',
                        padding: '10px 20px',
                        outline: 'none',
                        fontSize: '20px',
                        borderRadius: '10px',
                        border: '1px solid grey',
                        marginBottom: '40px'
                      }}/>
                      <textarea placeholder="Enter your message..." style={{
                        width: '100%',
                        padding: '30px',
                        height: '150px',
                        borderRadius: '10px',
                        fontSize: '20px'
                      }}></textarea>
                      <button style={{
                        width: '250px',
                        height: '60px',
                        margin: '50px auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '5px 0',
                        backgroundColor: 'lightcoral',
                        border: '1px solid grey',
                        borderRadius: '10px',
                        fontSize: '18px',
                        color: 'whitesmoke',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>Send message
                      </button>
                    </form>
                  </div>
                </Box>
              </Container>
            </div>
          </>
        ))}
      </>
    );
  }


  return (
    <>
      {louder ? <Louder/> : allContactPage}
    </>
  );
};

export default Contacts;