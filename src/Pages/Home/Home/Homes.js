import { Box, Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../../Services/Services/ServicesCard';
import './Homes.css'
const Homes = () => {
    const [temple, setTemple] = useState([])
    useEffect(() => {
        fetch('https://dry-bayou-95627.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setTemple(data.slice(0, 6)))
    }, [])
    return (
        <>
            <Container>

                <Box sx={{ flexGrow: 1, mb: 8 }} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            temple.map(article => <Grid item xs={2} sm={4} md={4}>
                                <ServicesCard article={article}></ServicesCard>

                            </Grid>)
                        }
                    </Grid>
                </Box>
            </Container>

        </>
    );
};

export default Homes;