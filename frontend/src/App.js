import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Herobanner from './component/herobanner';
import ProjectList from './component/projectList';
import Experience from './component/experience';
import Footer from './component/footer';
import Navbar from './component/navbar';
import AdminNav from './admin/componet/adminNav';
import Dashboard from './admin/componet/dashboard';
import Addproject from './admin/componet/addproject';
import Login from './component/login';
import Updateproduct from './admin/updateproduct';
import Education from './component/education';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
function App() {
  useEffect(() => {
    store.dispatch(loadUser); 
  })
  
  return (
    <div className="App main">
     <Navbar />
      <BrowserRouter>
          <Routes>
             <Route path="/" element={
              [ 
              <Herobanner />,
              <ProjectList/>,
              <Experience />,
              <Education />                
              ]
             } ></Route>

             {/* Admin Routes */}

              <Route path="/add/product" element={ <Addproject /> } ></Route>
             <Route path="/login" element={ <Login /> } ></Route>
             <Route path="/edite/product/:id" element={ < Updateproduct/> } ></Route>
             <Route path="/admin/dashboard" element={[
              <AdminNav />,
              <Dashboard />
             ]} ></Route>


          </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
