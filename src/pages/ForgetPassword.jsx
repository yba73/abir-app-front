import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const Forget = () => {

  const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/forgot-password', {email})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/signin')
               
            }
        }).catch(err => console.log(err))
    }
 
  return (
    <div
      className='px-4 w-full h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/36/77/63/240_F_236776308_kQn0MgsaDZgxVS91IH9fsW3cehQ7f5RG.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >

      <form
        className='border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]'
        onSubmit={handleSubmit}
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Reset Password </h1>
        <div className="form-outline mb-4">

          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
            
           
          />
        </div>


        <button
          className='mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed hover:bg-teal-900'
          type='submit'
        >
          Send Reset Link
        </button>

        <Link to='/signin' className='capitalize underline mb-4'>
          Return To Sign In
        </Link>
      </form>
    </div>
  );
};

export default Forget;