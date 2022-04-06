import React, { } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';





import './ServicesCard.css'
import { Button, Stack } from '@mui/material';

const ServicesCard = (props) => {
    const { name, about, picture, balance } = props.article
    console.log(props.article);
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <img style={{ width: '70px' }} src="https://www.kreedon.com/wp-content/uploads/2022/03/thumb-1920-549198-2.jpg" alt="" />
                    </Avatar>
                }


                title={name}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={picture}
                alt="Paella dish"
            />
            <CardContent>
                <Typography
                    variant="body2" color="text.secondary">
                    {about}
                </Typography>
                <br />
                <Typography
                    variant="body2" color="text.secondary">
                    {balance}
                </Typography>
            </CardContent>

            <Stack spacing={2}>
                <Button variant="contained" >Buy Now</Button>

            </Stack>
        </Card>
    )

};

export default ServicesCard;

/*https://www.kreedon.com/wp-content/uploads/2022/03/thumb-1920-549198-2.jpg  */