import { Box, Button, Container, Typography } from '@mui/material';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useCallback, useEffect, useState } from 'react';
import Louder from '../../Components/UI/Louder/Louder.tsx';
import { NavLink } from 'react-router-dom';

const About = () => {
  const [aboutPage, setAboutPage] = useState<IPost[]>([]);
  const [louder, setLouder] = useState<boolean>(false);

  const getPosts = useCallback(async () => {

    try {
      setLouder(true);
      const responsePosts: {data: IPostAPI} =  await axiosAPI<IPostAPI>('about.json');
      const postsData = responsePosts.data;

      if (postsData) {
        const postsInfoFromAPI= Object.keys(postsData).map((postInfo) => {
          return {
            ...responsePosts.data[postInfo],
            id: postInfo,
          };
        });

        setAboutPage(postsInfoFromAPI);
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

  let allPage = (
    <div>No page</div>
  );

  if (aboutPage.length > 0) {
    allPage = (
      <>
        {aboutPage.map((page) => (
          <>
            <div key={page.id} style={{
              background: 'url(https://img.freepik.com/free-photo/landmarks-modern-city_1359-338.jpg?t=st=1729874789~exp=1729878389~hmac=e10f6a92ff50ca5a65a09f47c55ec8f3606988d0495980651768a4c21426392e&w=740) center center no-repeat',
              backgroundSize: 'cover',
              marginTop: '-55px',
              backgroundColor: 'rgba(112,109,101,0.67)'
            }}>
              <div style={{backgroundColor: 'rgba(112,109,101,0.67)', padding: '5%'}}>
                <Container sx={{textAlign: 'center', color: 'white'}}>
                  <h1 style={{fontSize: '50px'}}> About Us <br/> <span
                    style={{textTransform: 'uppercase'}}>Metro Bank</span></h1>
                </Container>
              </div>
            </div>
            <div style={{backgroundColor: 'whitesmoke', marginTop: '-20px'}}>
              <Container>
                <div style={{paddingTop: '50px', textAlign: 'center'}}>
                  <Button variant="outlined" to={`/posts/${page.id}/edit`} component={NavLink} sx={{width: '100px'}}> Edit </Button>
                </div>
                <Box sx={{padding: '5% 0'}}>
                  <Typography gutterBottom variant="h2" component="div"
                              sx={{fontWeight: 600, margin: '20px auto', textAlign: 'center', width: '70%'}}>
                    {page.title}
                  </Typography>
                  <p style={{marginTop: '30px', color: 'grey'}}>{page.description}</p>
                  <div style={{display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin: '100px 0'}}>
                    <div
                      style={{display: 'flex', alignItems: 'center', padding: '20px', width: '35%'}}>
                      <img style={{border: '1px solid grey', borderRadius: '50%', marginLeft: '15%'}} width="80"
                           height="80"
                           src="https://img.icons8.com/office/80/crowd.png" alt="crowd"/>
                      <div style={{marginLeft: '30px'}}>
                        <h3 style={{fontSize: '40px', marginBottom: 0}}>50k+</h3>
                        <p style={{fontSize: '20px'}}>Happy Clients</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        width: '35%',
                        backgroundColor: 'rgb(0,15,30)',
                        color: 'white'
                      }}>
                      <img
                        style={{
                          border: '1px solid grey',
                          borderRadius: '50%',
                          marginLeft: '15%',
                          backgroundColor: 'white'
                        }}
                        width="96" height="96" src="https://img.icons8.com/emoji/96/dollar-banknote-emoji.png"
                        alt="dollar-banknote-emoji"/>
                      <div style={{marginLeft: '30px'}}>
                        <p style={{fontSize: '40px', marginBottom: 0}}>90Bn</p>
                        <p style={{fontSize: '20px'}}>Total Transection</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        width: '35%',
                        backgroundColor: 'rgb(174,36,38)',
                        color: 'white'
                      }}>
                      <img style={{
                        border: '1px solid grey',
                        borderRadius: '50%',
                        marginLeft: '15%',
                        backgroundColor: 'white',
                        padding: '10px'
                      }}
                           width="100" height="100" src="https://img.icons8.com/doodle/48/bank.png" alt="bank"/>
                      <div style={{marginLeft: '30px'}}>
                        <h3 style={{fontSize: '40px', marginBottom: 0}}>40+</h3>
                        <p style={{fontSize: '20px'}}>Branchs in USA</p>
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <img src="https://bayguzin.ru/demo2023/metrobank/assets/images/resource/mockup-1.png"
                         alt="Mobil Bank"/>
                    <div style={{width: '50%'}}>
                      <h3 style={{fontSize: '30px', marginTop: '120px'}}>Get the Fastest and Most Secure Banking</h3>
                      <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis,
                        suscipit you take action against fraud. See it the Security Center for and Mobile and Online
                        Banking.</p>
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{
                          backgroundColor: 'black',
                          color: 'whitesmoke',
                          display: 'flex',
                          width: '250px',
                          alignItems: 'center',
                          padding: '0 20px',
                          justifyContent: 'space-around',
                          borderRadius: '20px'
                        }}>
                    <span>
                      <img style={{width: '40px'}}
                           src="https://bayguzin.ru/demo2023/metrobank/assets/images/icons/icon-2.png" alt="PM"/>
                    </span>
                          <div>
                        <span
                          style={{textTransform: 'uppercase', fontWeight: 600, margin: 0, padding: 0}}>get it on</span>
                            <p style={{fontSize: '20px', margin: 0, padding: 0}}>Google Play</p>
                          </div>
                        </div>
                        <div style={{
                          backgroundColor: 'black',
                          color: 'whitesmoke',
                          display: 'flex',
                          width: '300px',
                          alignItems: 'center',
                          padding: '0 20px',
                          justifyContent: 'space-around',
                          borderRadius: '20px'
                        }}>
                      <span><img style={{width: '40px'}}
                                 src="https://bayguzin.ru/demo2023/metrobank/assets/images/icons/icon-3.png" alt="PM"/></span>
                          <div style={{padding: '20px 0'}}>
                            <span style={{textTransform: 'uppercase', fontWeight: 600, margin: 0, padding: 0}}>Download on the</span>
                            <p style={{fontSize: '20px', margin: 0, padding: 0}}>App Store</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
      {louder ? <Louder/> : allPage}
    </>
  );
};

export default About;
