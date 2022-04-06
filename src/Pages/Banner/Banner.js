import { Box, width } from '@mui/system';
import React from 'react';
import banner from '../../images/Banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <Box className="this"
        // sx={{
        //     minHeight: '80vh',
        //     background: "url(https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGV8ZW58MHx8MHx8&w=1000&q=80)",
        //     // width: '200%'
        //     backgroundRepeat: 'no-repeat',
        //     width: '100%'
        // }}

        >

            <img src={banner} style={{ width: '100%' }} alt="" />


        </Box >
    );
};

export default Banner;