import React from 'react'
import { Link ,NavLink} from 'react-router-dom'



const Navigation = () => {
  return (
    <>
       <section className='NavBg d-none d-lg-block fixedNav  w-100'>
          <div className='container py-3 d-flex justify-content-between align-items-center'>
              <div>
                <Link className='text-decoration-none logo text-white fw-bolder' to="#">LearnCoding</Link>
              </div>
         
              <nav>
                <ul className='d-flex list-unstyled mb-0'>
                  
                    <li className='px-lg-3 px-xl-4'><NavLink style={({isActive})=>{return{color:isActive? '#000':'#fff'}}} className='text-decoration-none navItem' to="./">Home</NavLink></li>
                    <li className='px-lg-3 px-xl-4'><NavLink style={({isActive})=>{return{color:isActive? '#000':'#fff'}}} className='text-decoration-none navItem' to="./About">About</NavLink></li>
                    <li className='px-lg-3 px-xl-4'><NavLink style={({isActive})=>{return{color:isActive? '#000':'#fff'}}} className='text-decoration-none navItem' to="./Courses">Courses</NavLink></li>
                    <li className='px-lg-3 px-xl-4'><NavLink style={({isActive})=>{return{color:isActive? '#000':'#fff'}}} className='text-decoration-none navItem' to="./Placements">Placements</NavLink></li>
                    <li className='px-lg-3 px-xl-4'><NavLink style={({isActive})=>{return{color:isActive? '#000':'#fff'}}} className='text-decoration-none navItem' to="./Contact">Contact</NavLink></li>
                </ul>
              </nav>
         
              <div>
                <ul className='d-flex list-unstyled mb-0 ps-0'>
                    <li className='px-3'><Link to="#"><i className="iconSize text-white facebook-color fa-brands fa-facebook-f fs-5"></i></Link></li>
                    <li className='px-3'><Link to="#"><i className="iconSize text-white insta-Color fa-brands fa-instagram  fs-5"></i></Link></li>
                    <li className='px-3'><Link to="#"><i className="iconSize text-white twitter-color fa-brands fa-twitter fs-5"></i></Link></li>
                </ul>
              </div>
          </div>
       </section>


{/* Mobile-offcanvas */}
      <section className='d-lg-none NavBg padding fixedNav w-100'>
       <div className='container d-flex justify-content-between align-items-center'>
          <Link className='text-decoration-none logo text-white fw-bolder' to="#">LearnCoding</Link>
          <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"><i class="fa-solid fa-bars text-white fs-3"></i></button>

          <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
              
              <div className="offcanvas-header d-flex justify-content-between align-items-center py-4">
                  <ul className='d-flex list-unstyled mb-0 ps-0'>
                      <li className='px-3'><Link to="#"><i className="iconSize text-black facebook-color fa-brands fa-facebook-f fs-5"></i></Link></li>
                      <li className='px-3'><Link to="#"><i className="iconSize text-black insta-Color fa-brands fa-instagram  fs-5"></i></Link></li>
                      <li className='px-3'><Link to="#"><i className="iconSize text-black twitter-color fa-brands fa-twitter fs-5"></i></Link></li>
                  </ul>
                  <button type="button" className="border-0 bg-transparent mt-2" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark fs-1"></i></button>
              </div>
              <div className="offcanvas-body NavBg">
                  <nav className="pt-5 mt-2 d-flex justify-content-center align-items-center">
                       <ul className='list-unstyled mb-0'>
                         <li className='pb-3'><NavLink className='text-decoration-none navItem' style={({isActive})=>{return{color:isActive? '#000':'#fff'}}}  to="./">Home</NavLink></li>
                         <li className='py-3'><NavLink className='text-decoration-none navItem' style={({isActive})=>{return{color:isActive? '#000':'#fff'}}}  to="./About">About</NavLink></li>
                         <li className='py-3'><NavLink className='text-decoration-none navItem' style={({isActive})=>{return{color:isActive? '#000':'#fff'}}}  to="./Courses">Courses</NavLink></li>
                         <li className='py-3'><NavLink className='text-decoration-none navItem' style={({isActive})=>{return{color:isActive? '#000':'#fff'}}}  to="./Placements">Placements</NavLink></li>
                         <li className='py-3'><NavLink className='text-decoration-none navItem' style={({isActive})=>{return{color:isActive? '#000':'#fff'}}}  to="./Contact">Contact</NavLink></li>
                       </ul>
                  </nav>
              </div>
          </div>
         </div>
      </section>

    </>
  )
}

export default Navigation;
