import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
       <div className="footerBg pt-5 pb-4 ">
          <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-3 d-xl-flex flex-column align-items-center">
                    <ul className="list-unstyled ">
                    <h4 className="text-white pb-1 pb-md-3">HEAD OFFICE</h4>
                       <li className="pb-2"><i className="fa-solid fa-location-dot pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">learncoding@gmail.com</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-envelope pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">information@gmail.com</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-mobile-screen pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">005-01008431112</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-phone pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">003-01008431168</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-address-card text"></i> <Link to="#" className="overcolor text-decoration-none text"> info@gmail.com</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-xl-flex flex-column align-items-center">
                    <ul className="list-unstyled ">
                    <h4 className="text-white pb-1 pb-md-3">QUICK LINKS</h4>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">Interview Notes</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">Mock Tests</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">Coding Courses</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">About Us</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">Blog</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-xl-flex flex-column align-items-center">
                    <ul className="list-unstyled ">
                    <h4 className="text-white pb-1 pb-md-3">PROGRAMMING</h4>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">HTML-5</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">CSS-3</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">JAVASCRIPT</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">REACT-JS</Link> </li>
                       <li className="pb-2"><i className="fa-solid fa-caret-right pe-1 text"></i> <Link to="#" className="overcolor text-decoration-none text">ANGULAR</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-2 col-xxl-3 d-xl-flex flex-column align-items-center">
                    <ul className="list-unstyled ">
                    <h4 className="text-white pb-1 pb-md-3">FOLLOW US</h4>
                      <li className='pb-2'><Link className="text text-decoration-none" to="#"><i className="iconSize text-white fa-brands fa-facebook fs-5 pe-2"></i>Facebook</Link></li>
                      <li className='pb-2'><Link className="text text-decoration-none" to="#"><i className="iconSize text-white insta-Color fa-brands fa-instagram  fs-5 pe-2"></i>Instagram </Link></li>
                      <li className='pb-2'><Link className="text text-decoration-none" to="#"><i className="iconSize text-white fa-brands fa-twitter fs-5 pe-2"></i>Twitter</Link></li>
                      <li className='pb-2'><Link className="text text-decoration-none" to="#"><i className="iconSize text-white fa-brands fa-youtube fs-5 pe-2"></i>Youtube</Link></li>
                      <li className='pb-2'><Link className="text text-decoration-none" to="#"><i className="iconSize text-white fa-brands fa-telegram fs-5 pe-2"></i>Telegram</Link></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <p className="text-center mb-0 py-3 px-1 Institute">&copy;2023, LearnCoding Computer Training Institute, Privacy Policy.</p>



        </>
    )
  }
  
  export default Footer