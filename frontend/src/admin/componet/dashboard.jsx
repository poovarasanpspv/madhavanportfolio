import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const { isAuthenticated } = useSelector(state => state.authState);
  const navigate = useNavigate();
 const [product, setproduct] = useState([]);

 const url = "/api/v1/products";
  useEffect(() => {
    if (isAuthenticated == false) {
      navigate('/')
    }

    axios.get(url).then(res => {
      setproduct(res.data)
    }).catch(err => console.log(err))
  },[]);

async function ProductDelete(deleteId) {
  if(window.confirm("Are you sure you want to delete this item?")){
    let url = "/api/v1/admin/product/"+deleteId;
    try {
      await axios.delete(url).then(res => {
        console.log(res);
        if (res.data.success) {
          window.location.reload();
        }
      }).catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    }
  }
}

  return (
<div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column align-self-start">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Dashboard
                </a>
              </li>

            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand" ><div></div></div><div className="chartjs-size-monitor-shrink" ><div></div></div></div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
              {/* <Link to="/admin/dashboard" className='btn btn-success me-3'> Back to Dashboard </Link> */}
              <Link to="/add/product" className='btn btn-success'> New Product </Link>
          </div>

          <h2>Products List</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>description</th>
                  <th>workingdate</th>
                  <th>createAt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                          {
          product.success ?
            product.products.map((item, i) => {
              return <tr key={i}>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td>{item.image}</td>
                  <td>{item.description}</td>
                  <td>{item.workingdate}</td>
                  <td>{item.createdAt}</td>
                  <td>
                 <div className="d-flex gap-2"> 
                  <Link to={"/edite/product/"+item._id} className="btn btn-success">Edit</Link>
                  {/* <Link to={"/delete/product/"+item._id} className="btn btn-danger">Delete</Link> */}
                  <button className="btn btn-danger" onClick={() => ProductDelete(item._id)}>Delete</button>
                  </div>
                  </td>
                </tr>
            }): <h2>No Data</h2>
          }
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
