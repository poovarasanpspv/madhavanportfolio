import React, { useState } from 'react'
import { useEffect } from 'react';

import axios from 'axios';
function ProjectList() {
 const [product, setproduct] = useState([]);
 const url = "/api/v1/products";
  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res.data);
      setproduct(res.data);
    }).catch(err => console.log(err))
  },[]);

  return (
    <div className='Project-collect-list scroll-by-section' id='project-list'>
      <h1 className='product-list'>Projects List</h1>

    <div className="container">
      <div className="row row-cols-md-3 row-cols-sm-12 gy-3">
          {
          product.success ?
            product.products.map(item => {
              return <div className='col' key={item._id}>
                <a href={item.websiteUrl}>
                  <div className="card">
                    <div className='over-hidden'>
                      <img height="200" src={item.image} alt="" className='card-img-top' />
                    </div>
                    <div className="card-body">
                      <h3 className='card-title'>{item.name}</h3>
                      <p className='card-text'>{item.description}</p>
                      <p className='card-text'>{item.workingdate}</p>
                    </div>
                  </div>
                  </a>  
            </div>
          }):null
          }
      </div>
    </div>
    <div className='read py-5'> <a href="/" className='view-more'> View More </a></div>
    </div>
  )
}

export default ProjectList
