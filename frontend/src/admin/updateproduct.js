import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
function Updateproduct() {
  const  navigate =  useNavigate();
  const { isAuthenticated } = useSelector(state => state.authState);
 useEffect(()=> {
   if(isAuthenticated == false){
    navigate('/');
  }
 });

  const {id} = useParams();

  const GetUrl = "/api/v1/product/"+id;

   const [productName, setProject]= useState("");
   const [dateval, setDate]= useState("");
   const [description, setdescription]= useState("");
   const [websitelink, setWebsitelink]= useState("");
   const [publish, setpublish]= useState(true);
   const [file, setFile]= useState("");
   const [fileName, setfileName]= useState("");
   const [result, setresult]= useState("");
   const fileinput = useRef();
  const [clearImage, setclearImage] = useState(false); 
  const [imagepreview, setimagepreview] = useState("");

   async function HandleSubmit(e) {
    e.preventDefault();

    if(productName && dateval && description && websitelink && publish){
      
        const formData = new FormData();

        formData.append("file",file);
        formData.append("filename",fileName);
        formData.append("name",productName);
        formData.append("workingdate",dateval);
        formData.append("websiteUrl",[{link:websitelink, title:"readMore"}]);
        formData.append("description",description);
        formData.append("published",publish);
        formData.append("clearImage",clearImage);

        await axios.put("/api/v1/admin/product/"+id,formData)
        .then(res => {
          if(res.data.success){
            setresult(res.data);
            console.log(res.data);
            setTimeout(() => {
              setresult("");
            }, 5000);
            navigate("/admin/dashboard");
          }
        })
        .catch(err=>{
            if (err.data !== undefined) {
          setresult(err.data.message);
            console.log(err.data.message);
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
    setclearImage(true);
    setimagepreview(URL.createObjectURL(fileinput.current.files[0]));
  }

    useEffect(()=>{
      axios.get(GetUrl)
      .then(res=>{
       console.log(res.data);
       if (res.data.success) {
        setProject(res.data.product.name);
        setDate(res.data.product.workingdate);
        setdescription(res.data.product.description);
        setWebsitelink(res.data.product.websiteUrl);
        setimagepreview(res.data.product.image);
       }
      }).catch(err => console.log(err.response))
    }, []);

  return (
    <div className='container text-start w-50 mx-auto my-5'>
       <div className='col text-end'>
        <Link to="/admin/dashboard" className='btn btn-success me-3'> Back to Dashboard </Link>

        <Link to="/add/product" className='btn btn-success'> New Product </Link>
        </div>
      {(result) ? <p className='text-danger fs-3'>{result} </p> : null}
      <form onSubmit={HandleSubmit} encType='multipart/form-data'>
        <div className="mb-3">
            <label htmlFor="projectnameid" className="form-label">Project Name</label>
            <input type="text" className="form-control" id="projectnameid" value={productName} onChange={(e) => setProject(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <div className='row' ><div className='col-2' >
            <img src={imagepreview} alt='reader preview'  className='img-fluid' width="70" height="52" />
           </div>
            <div className='col' >
              <label htmlFor="projectimg" className="form-label">Project image</label>
              <input type="file" className="form-control" id="projectimg" ref={fileinput} onChange={saveFile} />
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

export default Updateproduct;
