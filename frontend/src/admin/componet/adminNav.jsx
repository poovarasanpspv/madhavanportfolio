import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminNav() {
  const navigate = useNavigate();
 async function Userlogout() {
     try {
      await axios.get('/api/v1/logout').then(res => {
        console.log(res);
        if (res.data.success) {
          navigate('/');
        }
      }).catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    }
 }
  return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <button className="nav-link" onClick={Userlogout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
