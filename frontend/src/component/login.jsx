import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUserSuccess } from '../slices/authSlice';
function Login() {
const dispatch = useDispatch();
const  navigate =  useNavigate();

  const { loading, isAuthenticated } = useSelector(state => state.authState);
  useEffect(()=> {
    if(isAuthenticated){
      navigate('/admin/dashboard');
    }
  });


  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    
    if(password && email){
      axios.post("/api/v1/login", {email, password})
      .then(result => {
      console.log(result);
      if (result.data.success) {
        dispatch(loadUserSuccess);
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 3000);
      }
        })
      .catch(err => console.log(err));
    }
  }
  return (
    <div className="w-25 mx-auto mt-5 text-start bg-info p-2">
      <h2> Login</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" disabled={loading}>Submit</button>
</form>
    </div>
  )
}

export default Login
