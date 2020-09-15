import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const onChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    axios
    .post('http://localhost:5000/api/login', form)
    .then(({data}) =>{
      localStorage.setItem('token', data.payload);
      props.setToken(data.payload);
    })
    .catch(err => {
      console.log(err)
    });
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
    {props.token && 
      <Redirect to='/bubble-page' />
      }
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <label htmlFor='username'>
        <input 
        onChange={onChange}
        type="text"
        name="username"
        placeholder='Username'
        />
      </label>
      <label htmlFor='password'>
        <input 
        onChange={onChange}
        type="password"
        name="password"
        placeholder='Password'
        />
      </label>
      <button>Submit</button>
      </form>
      
    </>
  );
};

export default Login;
