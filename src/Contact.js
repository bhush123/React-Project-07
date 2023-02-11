import React from "react";
import { Link } from "react-router-dom";
import contactImg from "./Images/call_back.svg"

const Contact = () => {
  return (
    <div className="container marginAllcomp">
      {/* <h3>Contact Us</h3> */}
      <div className="py-5">
        <div className="row justify-content-center p-md-4">
          <div className="col-xxl-9 col-xl-11 col-lg-12  row shadow-lg rounded-4 p-3">
            <div className="col-lg-8 pt-4 pb-3">
              <h4 className="text-center">Contact to our experts</h4>
              <p className="text-center pt-3 text-muted">
                Still Confused how PrepBytes can help you <br /> achieve your dream?
                Talk to our experts
              </p>
              <div className="p-4 ps-2">
                <img src={contactImg} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-4  d-flex align-items-md-center justify-content-center">
               <form action="">
                 <div className="pb-3">
                   <input type="text" placeholder="Name" className="form-control"/>
                 </div>
                 <div className="py-3">
                   <input type="email" placeholder="Email" className="form-control" />
                 </div>
                 <div className="py-3">
                    <input type="text" placeholder="Phone" className="form-control"/>
                 </div>

                <div className="py-3">
                  <textarea className="ps-2 pt-1 rounded-2" id="" cols="30" rows="6" placeholder="Query"></textarea>
                </div>
                <div>
                  <Link className="d-block text-decoration-none text-white py-2 text-center rounded-2 KnowMore">Request a call back</Link>
                </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
