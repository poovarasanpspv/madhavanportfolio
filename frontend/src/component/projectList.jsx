import React, { useState } from 'react'
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
   const [viewMorestate, setviewMorestate] = useState('card d-none');
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 function viewnoreheight() {
  setviewMorestate('card');
 }
  return (
    <div className='Project-collect-list scroll-by-section' id='project-list'>
      <h1 className='product-list'>Projects List</h1>

    <div className="container">
      <div className="row row-cols-md-3 row-cols-sm-12 gy-3">
          {
          product.success ?
            product.products.map(item => {
              return <div className='col' key={item._id}>
                 <Modal
                   show={show}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
                 >
                   <Modal.Header closeButton>
                     <Modal.Title className='card-title'>  {item.name} </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                     <p className='card-text'>{item.description}</p>
                   </Modal.Body>
                   <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                       Close
                     </Button>
                   </Modal.Footer>
                 </Modal>
                  <div className={i > 8 ? viewMorestate : 'card' } onClick={handleShow}>
                    <div className='over-hidden'>
                      <img height="200" src={item.image} alt="" className='card-img-top' />
                    </div>
                    <div className="card-body">
                      <h3 className='card-title'>{item.name}</h3>
                      <p className='card-text'>{item.workingdate}</p>
                       <a class="btn btn-success" href={item.websiteUrl}>visit website</a> 
                    </div>
                  </div>
            </div>
          }):null
          }
      </div>
    </div>
    <div className='read py-5'> <span className='view-more' onClick={viewnoreheight}> View More </span> </div>
    </div>
  )
}

export default ProjectList
