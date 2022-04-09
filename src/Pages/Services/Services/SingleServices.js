import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingService from './BookingService';
import Procured from './Procured';

const SingleServices = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        const hello = async () => {
            await fetch(`https://dry-bayou-95627.herokuapp.com/products/${_id}`)
                .then(res => res.json())
                .then(data => setService(data))
        }
        hello()
    }, [])
    return (

        <Typography paragraph>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} mt={5}>
                    <img style={{ width: '100%' }} src={service.picture} alt="" />
                    <Typography variant='h4'>Name of: {service.name}</Typography>


                </Grid>
                <Grid item xs={12} sm={7}>

                    <BookingService
                        service={service}

                    ></BookingService>
                </Grid>

            </Grid>
        </Typography>

    );
};

export default SingleServices;