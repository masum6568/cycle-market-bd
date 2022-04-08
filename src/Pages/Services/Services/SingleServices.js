import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Procured from './Procured';

const SingleServices = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (

        <Typography paragraph>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} mt={5}>
                    <img style={{ width: '100%' }} src={service.picture} alt="" />
                    <Typography variant='h4'>Name of: {service.name}</Typography>
                    <Button>Go Enter Your information</Button>
                </Grid>
                <Grid item xs={12} sm={7}>

                    <Procured></Procured>
                </Grid>

            </Grid>
        </Typography>


        // <div>
        //     <h2>Name of: {service.name}</h2>
        //     <h2>This is booking: {_id}</h2>
        //     <img src={service.picture} alt="" />
        //     <button>Order now</button>
        // </div>
    );
};

export default SingleServices;