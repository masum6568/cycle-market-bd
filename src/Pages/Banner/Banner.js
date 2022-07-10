import { Button, Grid, Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import './Banner.css'

const Banner = () => {
  
    return (
        <Box className="this" style={{ marginTop: '16px' }} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} style={{ background: `url(https://wpsent.com/html/cycle/img/shape/shape_1.png)` }}>

                    <div style={{ marginTop: '250px', marginBottom: '20px' }}>
                        <Typography variant='h1'>
                            Fun Rides
                        </Typography>
                        <p>In 1948, AVON Cycles Ltd. ,<br />
                            has emerged as one of the largest <br />
                            cycle manufacturers in India. Today,<br />
                            more than 200 different models of <br />
                            best cycles that embodies ...</p>
                    </div>
                    <Button variant="contained" endIcon={<SendIcon />} style={{ padding: '14px' }}>
                        More Info
                    </Button>
                </Grid>
                <Grid item xs={12} sm={7} style={{ background: `url(https://wpsent.com/html/cycle/img/bannaer_shape.png)` }}>

                    <img style={{ width: '100%' }} src="https://wpsent.com/html/cycle/img/banner_img.png" alt="" />

                </Grid>

            </Grid>
        </Box >
    );
};

export default Banner;