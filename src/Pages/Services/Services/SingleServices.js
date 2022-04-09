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
            await fetch(`http://localhost:5000/products/${_id}`)
                .then(res => res.json())
                .then(data => setService(data))
        }
        hello()
    }, [])




    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${_id}`)
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [_id])
    return (

        <Typography paragraph>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} mt={5}>
                    <img style={{ width: '100%' }} src={service.picture} alt="" />
                    <Typography variant='h4'>Name of: {service.name}</Typography>
                    <Typography variant='h4'>Name of: {service._id}</Typography>
                    <Button>Go Enter Your information</Button>
                </Grid>
                <Grid item xs={12} sm={7}>

                    <BookingService
                        service={service}

                    ></BookingService>
                </Grid>

            </Grid>
        </Typography>

        // <Container>

        //     {service && <Alert severity="success">Appointment Booked successfully!</Alert>}
        //     <Grid container spacing={2}>
        //         {
        //             service.map(article => <BookingService
        //                 key={service._id}
        //                 article={article}
        //                 // date={date}
        //                 setService={setService}
        //             >
        //             </BookingService>)
        //         }
        //     </Grid>
        // </Container>











        // <div>
        //     <h2>Name of: {service.name}</h2>
        //     <h2>This is booking: {_id}</h2>
        //     <img src={service.picture} alt="" />
        //     <button>Order now</button>
        // </div>
    );
};

export default SingleServices;