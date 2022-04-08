import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ExtraPart = () => {
    return (
        <Container>
            <Box>
                <Typography style={{ background: `url(https://media.istockphoto.com/photos/vector-hexagons-pattern-geometric-abstract-background-with-simple-picture-id1307794659?k=20&m=1307794659&s=170667a&w=0&h=ji7vqTbl3pi5nqWd9S6sSFmdbz8bA64LCJw0lCj3rTc=)`, marginBottom: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <img style={{ width: '100%' }} src="https://i0.wp.com/ichef.bbci.co.uk/wwfeatures/1280_720/images/live/p0/25/4m/p0254mbf.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <h2>Special One</h2>
                            <p>In 1948, AVON Cycles Ltd. , has emerged as one of the largest cycle manufacturers in India. Today, more than 200 different models of best cycles that embodies ...</p>
                            <p>Give Your Rating....</p>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            <div className="btn" >
                                <NavLink to="/services"> <Button variant="contained" color="success" style={{ textDecoration: 'none' }}>More Service</Button></NavLink>
                            </div>
                        </Grid>

                    </Grid>
                </Typography>
            </Box>
        </Container>

    );
};

export default ExtraPart;