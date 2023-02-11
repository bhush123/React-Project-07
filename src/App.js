import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation';
import Home from './Home'
import About from './About'
import Courses from './Courses'
import Placements from './Placements'
import Contact from './Contact'
import Footer from './Footer';


function App() {
  return (
    <>
       <BrowserRouter>
           <Navigation/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/About' element={<About/>}/>
            <Route exact path='/Courses' element={<Courses/>}/>
            <Route exact path='/Placements' element={<Placements/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
         </Routes>
         <Footer/>
       </BrowserRouter>
    </>
  );
}

export default App;
