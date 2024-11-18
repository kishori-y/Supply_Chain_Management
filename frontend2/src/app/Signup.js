"use client";
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {

    const [values, setValues] = useState({
        name: '',
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
        if (err.name === "" && err.email === "" && err.password === "") {
          axios.post('http://localhost:8081/signup', values)
          .then(res => {
            navigate('/');
          })
          .catch(err => console.log(err));
        }
    }
  return (
     
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
         
       
      <div className='bg-white p-3 rounded-5 w-30 ' >
       
         <div className='text-amber-700'>
            <h1>Supply Chain Management System</h1>
         </div>
       
         
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder='Enter Name' name='name'
                onChange={handleInput} className='form-control rounded-5'/>
                {errors.name && <span className='text-danger'> {errors.name}</span>}
            </div>
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
            <button type='submit' className='btn btn-success rounded-5'><strong>Sign up</strong></button>
            <p>You are agree to our terms and policies</p>
            <Link to='/' className='btn btn-default border rounded-5 bg-light text-decoration-none'>Login</Link>
        </form>
      </div>
      
    </div>
  )
}

export default Signup