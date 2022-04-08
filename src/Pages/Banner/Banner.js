import { Button, Grid } from '@mui/material';
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
import banner from '../../images/Banner.jpg'
import './Banner.css'
const Banner = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


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

            {/* <img src='https://wpsent.com/html/cycle/img/banner_img.png' style={{ width: '100%' }} alt="" /> */}




            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} >

                    <div style={{ marginTop: '250px' }}>
                        <h1>Special One</h1>
                        <p>In 1948, AVON Cycles Ltd. , has emerged as one of the largest cycle manufacturers in India. Today, more than 200 different models of best cycles that embodies ...</p>
                    </div>
                    <Button variant="contained" endIcon={<SendIcon />} style={{ padding: '14px' }}>
                        More Info
                    </Button>
                    {/* <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',

                        }}


                    >
                        <TextField fullWidth label="fullWidth" id="fullWidth" style={{ marginBottom: '240px' }} />
                    </Box>
 */}

                    {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" />

                    <OutlinedInput style={{ marginTop: '240px' }}
                        id="outlined-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',

                        }}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} style={{ padding: '14px' }}>
                        Search
                    </Button>
 */}


                </Grid>
                <Grid item xs={12} sm={7} style={{ background: `url(https://www.freepik.com/free-photo/dressed-half-mens-body-standing-near-bicycle_7722261.htm#query=cycle&position=31&from_view=search)` }}>

                    <img style={{ width: '100%' }} src="https://wpsent.com/html/cycle/img/banner_img.png" alt="" />

                </Grid>

            </Grid>


            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste excepturi optio autem soluta vel impedit quisquam quis inventore quam tempora nihil, culpa dolorem delectus cumque aliquam deleniti, atque iusto! Laudantium vitae sequi vero, molestiae dicta alias pariatur sapiente praesentium temporibus nesciunt cum nostrum enim illo et illum, eius delectus.</p> */}
        </Box >
    );
};

export default Banner;