
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div style={{ backGroundColor: 'black' }} >
            <div style={{ background: `url(https://png.pngtree.com/thumb_back/fh260/background/20210805/pngtree-gradient-raster-geometric-halftone-abstract-dot-white-business-concise-technology-background-image_755998.jpg)` }}>
                <Typography variant='h2' style={{ paddingTop: '200px' }}>

                    About Us...
                </Typography>
            </div>

            <Box className="this" >





                <Grid container spacing={2} style={{
                    boxShadow: ' 0 8px 12px 0 rgba(0, 0, 0, 0.2)', backgroundColor: "white", marginTop: "80px",
                    marginBottom: " 80px ",
                    padding: '40px'
                }}>
                    <Grid item xs={12} sm={5}>

                        <Typography style={{ marginTop: '150px', marginLeft: '50px' }}
                            variant='h5'
                        >
                            “As a kid, I had a dream – I wanted to own my own bicycle. When I got the bike I must have been the happiest boy in Liverpool, maybe the world. I lived for that bike. Most kids left their bike in the backyard at night. Not me. I insisted on taking mine indoors and the first night I even kept it in my bed.”

                            John Lennon, The Beatles
                            “Cyclists see considerably more of this beautiful world than any other class of citizens. A good bicycle, well-applied, will cure most ills this flesh is heir to.”

                            Dr K.K. Doty
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={7}>

                        <img style={{ width: '80%' }} src="https://miro.medium.com/max/1400/1*CQQZBf0iRtMVkf1JFMsT7w.jpeg" alt="" />

                    </Grid>

                </Grid>
            </Box >



            <Box >
                <Grid container spacing={2} style={{ marginBottom: '220px', marginTop: '200px' }}>
                    <Grid item xs={12} sm={6} >
                        <img src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=" style={{ width: '60%' }} alt="" />

                    </Grid>


                    <Grid item xs={12} sm={5}>
                        <img src="https://deathofhemingway.com/wp-content/uploads/2020/12/istockphoto-1045886560-612x612-1.jpg" alt="" style={{ width: '90%', marginRight: '400px', marginTop: '150px' }} />

                    </Grid>

                </Grid>



                <Grid container spacing={2} style={{
                    boxShadow: ' 0 8px 12px 0 rgba(0, 0, 0, 0.2)', backgroundColor: "white", marginTop: "80px",
                    marginBottom: " 80px ",
                    padding: '40px'
                }}>
                    <Grid item xs={12} sm={5} >
                        <iframe width="750" height="500" src="https://www.youtube.com/embed/ZDbNe3mS0aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        <Typography style={{ marginTop: '100px', marginLeft: '50px' }}
                            variant='h5'
                        >
                            The 68th Republic Day of the country in 2017 was celebrated with much fanfare with a huge parade. Some of the most impressive motorcycle stunts were performed this year by the Corps of the Military Police. These are not the conventional stunts such as lifting rear wheels in the air or wheelies and they go beyond the same towards things which are absolutely inconceivable! The stunts were fascinating with various complex arrangements of people on motorcycles. Standing on top of each other on running motorcycles is something fascinating to say the least! They also performed breathtaking stunts like people on a trellis linked to the motorcycle and spinning like propellers as well. Dozens of human riders then made a pyramid over nine motorcycles. While being dangerous stunts (and ones that you should never try to perform), they are fascinating and were key attractions at the 2017 Republic Day Parade.
                        </Typography>

                    </Grid>

                </Grid>

            </Box>
            <Footer></Footer>


        </div>
    );
};

export default About;