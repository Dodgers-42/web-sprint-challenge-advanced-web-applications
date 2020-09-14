import React from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

  const [from, setForm] = useState({
    username: '',
    password: '',
  });

  const onChange = event => {}
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
