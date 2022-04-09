import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import useAuth from '../../../hooks/UseAuth';
import { useNavigate, useParams } from 'react-router-dom';
import DashBoardHome from '../../DashBoard/DashBoardHome/DashBoardHome';

const BookingService = ({ service }) => {
    const { name, balance, picture } = service || {};
    console.log(name, balance, picture);
    const [selectedPackage, setPackage] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const { user } = useAuth()
    const { _id } = useParams()
    const navigate = useNavigate();
    // useEffect(() => {
    //     const hello = async () => {
    //         await fetch(https://mighty-woodland-10467.herokuapp.com/products/${id})
    //             .then(res => res.json())
    //             .then(data => setPackage(data))
    //     }
    //     hello()
    // }, [id])

    const initialInfo = { Name: user.displayName, email: user.email, phone: '' }
    const [bookingInformation, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInformation };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo)
    }
    const handleBookingSubmit = (e) => {
        const bookingInfo = { ...bookingInformation, packageName: service.name, packageImg: service.picture, price: service.balance, status: "pending" }
        console.log(bookingInfo);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
            });
        console.log();
        e.preventDefault();
    }







    return (
        <>
            <form onSubmit={handleBookingSubmit}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="Name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Phone Number"
                    size="small"
                />

                <Button type="submit" variant="contained">Submit</Button>
            </form>
            {/* <DashBoardHome
                service={service}
            ></DashBoardHome> */}
        </>
    );
};

export default BookingService;









































































// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button, Typography } from '@mui/material';
// import useAuth from '../../../hooks/UseAuth';

// const BookingService = ({ service }) => {
//     // console.log(service)

//     const { name, balance, picture } = service || {};
//     // console.log(name, balance, picture);
//     const { user } = useAuth();
//     const initialInfo = { orderBy: user.displayName, email: user.email, phone: '' }
//     const [bookingInfo, setBookingInfo] = useState(initialInfo);

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newInfo = { ...bookingInfo };
//         newInfo[field] = value;
//         console.log(newInfo)
//         setBookingInfo(newInfo);
//     }

//     const handleBookingSubmit = e => {
//         // collect data
//         const order = {
//             ...bookingInfo,
//             balance,
//             picture,
//             productName: name,

//         }
//         console.log(order)

//         send to the server
//         fetch('http://localhost:5000/order', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(order)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     alert('Succesfully ordered')
//                     // handleBookingClose();
//                 }
//             });

//         e.preventDefault();
//     }






//     return (



//         <Box
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <Typography>
//                 name: {name}
//             </Typography>
//             <form onSubmit={handleBookingSubmit} >
//                 <TextField
//                     disabled
//                     sx={{ width: '90%', m: 1 }}
//                     id="outlined-size-small"
//                     name='name'
//                     defaultValue={name}
//                     size="small"
//                 />
//                 <br />
//                 <TextField
//                     sx={{ width: '90%', m: 1 }}
//                     id="outlined-size-small"
//                     name="orderBy"
//                     onBlur={handleOnBlur}
//                     defaultValue={user.displayName}
//                     size="small"
//                 />
//                 <br />
//                 <TextField
//                     sx={{ width: '90%', m: 1 }}
//                     id="outlined-size-small"
//                     name="email"
//                     onBlur={handleOnBlur}
//                     defaultValue={user.email}
//                     size="small"
//                 />
//                 <br />
//                 <TextField
//                     sx={{ width: '90%', m: 1 }}
//                     id="outlined-size-small"
//                     name="phone"
//                     onBlur={handleOnBlur}
//                     defaultValue="Phone Number"
//                     size="small"
//                 />
//                 <br />
//                 <TextField
//                     disabled
//                     sx={{ width: '90%', m: 1 }}
//                     id="outlined-size-small"
//                     name="image"
//                     onBlur={handleOnBlur}

//                     defaultValue={balance}
//                     size="small"
//                 />
//                 <br />
//                 <Button type="submit" variant="contained">Submit</Button>
//             </form>
//         </Box>
//     );
// };

// export default BookingService;