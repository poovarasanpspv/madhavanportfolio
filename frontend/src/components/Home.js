import { Fragment, useEffect, useState } from "react";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Pagination from 'react-js-pagination';

export  default function Home(){
    const [currentPage, setCurrentPage] = useState(1);
 
    const setCurrentPageNo = (pageNo) =>{
        setCurrentPage(pageNo)
       
    }

    return (
        <Fragment>
      
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <h1 id="products_heading">Latest Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">


                        </div>
                    </section>
                    
                    <div className="d-flex justify-content-center mt-5">
                           <Pagination 
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                        
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                           />     
                    </div>
                </Fragment>
           
        </Fragment>
    )
}