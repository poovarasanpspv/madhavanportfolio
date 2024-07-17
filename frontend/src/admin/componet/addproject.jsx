import axios from 'axios';
import React, {useEffect, useRef, useState } from 'react'
import defaultimage from '../../asseset/defaultimages/default-product.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Addproject() {
  const  navigate =  useNavigate();
  const { isAuthenticated } = useSelector(state => state.authState);
    useEffect(()=> {
      if(isAuthenticated == false){
        navigate('/');
      }
    });
    
   const [projectVal, setProject]= useState("");
   const [dateval, setDate]= useState("");
   const [description, setdescription]= useState("");
   const [websitelink, setWebsitelink]= useState("");
   const [publish, setpublish]= useState(true);
   const [file, setFile]= useState("");
   const [fileName, setfileName]= useState("");
   const [result, setresult]= useState("");
   const fileinput = useRef();
  const [imagepreview, setimagepreview] = useState(defaultimage);

   async function HandleSubmit(e) {
    e.preventDefault();
    
    if(projectVal && dateval && description && websitelink && publish){
        const formData = new FormData();

        formData.append("file",file);
        formData.append("filename",fileName);
        formData.append("name",projectVal);
        formData.append("workingdate",dateval);
        formData.append("websiteUrl",websitelink);
        formData.append("description",description);
        formData.append("published",publish);

        await axios.post("/api/v1/admin/product/new",formData)
        .then(res => {
          if(res.data.success){
            setresult(res.data);
            setTimeout(() => {
              setresult("");
            }, 5000);
            navigate('/admin/dashboard');
          }
        })
        .catch(err=>{
            if (err.response !== undefined) {
          setresult(err.response.data.message);
            console.log(err.response.data.message);
        }else{
          setresult("Server Error!");
        }
          setTimeout(() => {
              setresult("");
          }, 5000);
        });
    }
  }

  const saveFile = () => {
    // console.log(fileinput.current.files[0]);
    setFile(fileinput.current.files[0]);
    setfileName(fileinput.current.files[0].name);
    setimagepreview(URL.createObjectURL(fileinput.current.files[0]));
  }

  return (
    <div className='container text-start w-50 mx-auto my-5'>
          <div className='col text-end'>
          <Link to="/admin/dashboard" className='btn btn-success me-3'> Back to Dashboard </Link>
        </div>
      <p className='text-danger fs-3'>{result}</p>
      <form onSubmit={HandleSubmit} encType='multipart/form-data'>
        <div className="mb-3">
            <label htmlFor="projectnameid" className="form-label">Project Name</label>
            <input type="text" className="form-control" id="projectnameid" value={projectVal} onChange={(e) => setProject(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <div className='row' ><div className='col-2' >
            <img src={imagepreview} alt='reader preview'  className='img-fluid' width="70" height="52" />
           </div>
            <div className='col' >
              <label htmlFor="projectimg" className="form-label">Project image</label>
              <input type="file" className="form-control" id="projectimg" ref={fileinput} onChange={saveFile} required/>
            </div>
          </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputdate" className="form-label">Date range</label>
            <input type="text" className="form-control" id="exampleInputdate" value={dateval} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputdescription" className="form-label">description</label>
            <input type="text" className="form-control" id="exampleInputdescription" value={description} onChange={(e) => setdescription(e.target.value)} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputwebSiteLink" className="form-label">webSite Link</label>
            <input type="text" className="form-control" id="exampleInputwebSiteLink" value={websitelink} onChange={(e) => setWebsitelink(e.target.value)} required/>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="examplestatus" value={publish} onChange={(e) => setpublish(e.target.value)} checked/>
            <label className="form-check-label" htmlFor="examplestatus">Publichsh</label>
        </div>
        <button type="submit" className="btn btn-primary" >Submit </button>
    </form>
    </div>
  )
}

export default Addproject
