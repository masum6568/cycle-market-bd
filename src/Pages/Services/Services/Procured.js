import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import './Procured.css'
const Procured = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post("https://lit-caverns-20939.herokuapp.com/information", data)
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
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"></input>
                <input {...register("picture")} placeholder="picture" />
                <input type="number" {...register("balance")} placeholder="balance" />
                <input type="number" {...register("rating")} placeholder="rating" />
                <textarea {...register("about")} placeholder="about" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Procured;