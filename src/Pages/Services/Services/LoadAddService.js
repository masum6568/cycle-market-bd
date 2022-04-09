import { Button, Container, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const LoadAddService = () => {

    const [cycle, setCycle] = useState([]);
    useEffect(() => {
        fetch('https://dry-bayou-95627.herokuapp.com/information')
            .then(res => res.json())
            .then(data => setCycle(data))
    }, [])



    return (
        <>
            <h2>Added Admin Demo</h2>
            <Container>
                <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px', paddingBottom: '50px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            cycle.map(article => <Grid item xs={2} sm={4} md={4}>
                                <ServicesCard article={article}></ServicesCard>

                            </Grid>)
                        }
                    </Grid>
                </Box>
            </Container>
            {/* <Footer></Footer> */}
        </>
    );
};
export default LoadAddService;