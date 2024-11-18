"use client";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        //setErrors(Validation(values));
        const err = Validation(values);
        setErrors(err)
        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/home');
                } else {
                    alert("No record existed");
                }
            
            })
            .catch(err => console.log(err));
          }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded-5 w-30'>
        <div className='text-amber-700'>
            <h1>Supply Chain Management System</h1>
         </div>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-5'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-5'/>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success rounded-5'><strong>Log in</strong></button>
                <p>You are agree to our terms and policies</p>
                <Link to='/signup' className='btn btn-default border rounded-5 bg-light text-decoration-none'><strong>Create Account</strong></Link>
            </form>
        </div>
    </div>
  )
}

export default Login