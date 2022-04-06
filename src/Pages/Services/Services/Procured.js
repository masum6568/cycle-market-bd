import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import './Procured.css'
const Procured = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post("http://localhost:8000/information", data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Information Collected');
                    reset();
                }


            })




    }
    return (
        <div className='buy-now'>
            <h2>Add Your Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("city")} placeholder="City" />
                <input type="number" {...register("phone")} placeholder="Phone" />
                <input {...register("email")} placeholder="Email" />
                <textarea {...register("massage")} placeholder="Message" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Procured;