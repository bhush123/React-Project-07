import React from 'react'
import homeImg from "./Images/homeImg (1).svg"
import homeImg1 from "./Images/uincept.webp"
import homeImg2 from "./Images/Google-launchpad.webp"
import homeImg3 from "./Images/future-skills-homepage.webp"
import homeImg4 from "./Images/aws-ed-start.webp"
import homeImg5 from "./Images/she-leads.webp"
import homeImg6 from "./Images/stairs_of_approach(web).svg"
import homeImg7 from "./Images/tools_for_2020.svg"
import homeImg8 from "./Images/BanerHomeImg-.webp"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='overflow-hidden mt-5'>
     <div className='overflow-hidden mt-5'>
      
      <div className='row align-items-center overflow-hidden'>
          <div className="col-lg-7 d-lg-flex justify-content-center  order-last">
              <div className='ps-2 pt-4 pt-xl-5 pt-xxl-4'>
                <p className='coding startYourYourney mb-0'>Start your journey of success</p>
                <p className='coding mb-0'>Personalised Coding Programs</p>
                <p className='coding mb-0'>to make coding easier for you</p>
                <p className='startYourYourney wantTo py-md-4 py-2'>Want to know how LearnCoding can help you?</p>
                <div className='pb-5'>
                <Link to='./About' className="text-decoration-none text-white py-2 px-4 rounded-2 KnowMore">know More</Link>
                </div>
              </div>
          </div>

    
           <div className="col-lg-5 homeImg p-0 order-lg-last">
                 <div className='ms-md-3 m-lg-0'>
                  <img src={homeImg} className="img-fluid" alt="" />
                 </div>
           </div>
      </div>

     <div className='container pt-lg-5'>
          <div className='container'>
            <div className='container'> 
               <div className='row row-cols-2 row-cols-md-3 row-cols-lg-5'>
                 <div className='text-center'><img src={homeImg1} className='img-fluid' alt="" /></div>
                 <div className='text-center'><img src={homeImg2} className='img-fluid' alt="" /></div>
                 <div className='text-center'><img src={homeImg3} className='img-fluid' alt="" /></div>
                 <div className='text-center'><img src={homeImg4} className='img-fluid' alt="" /></div>
                 <div className='text-center'><img src={homeImg5} className='img-fluid' alt="" /></div>
               </div>
            </div>
          </div>

     </div>
     </div>

     <div className='row overflow-hidden'>
               <div className='text-center col-md-4 p-0'>
                 <img src={homeImg6} className="img-fluid" alt=""/>
               </div>
  
               <div className='p-0 col-md-8 d-flex justify-content-center align-content-center'>
                  <img src={homeImg7} className="img-allTechnology" alt=""/>
               </div>
        </div>

        
      <div className='d-flex justify-content-center p-md-0 p-lg-5 mb-4'>
           <div className='position-relative'>
              <img src={homeImg8} className="d-none d-md-flex img-fluid" alt="" />

              <div className='position-1 px-2 ps-xl-5 ms-xl-3 pt-3 '>
                 <p className='coding-2 mb-md-0 mb-lg-3'>Want to represent your college?</p>
                 <p className='LearnCoding-1'>Join <span className='LearnCoding'>LearnCoding Campus Business Manager <br/> Internship program.</span></p>

              <div className='pt-4 pt-md-3 pt-lg-4 pb-3 pb-xl-0'>
                <Link className="text-decoration-none text-white py-2 px-4 rounded-2 joinNow">Join Now</Link>
              </div>
              </div>
           </div>
      </div>

       
       <div className='questions pt-3 pb-5'>
          <p className='pt-xl-4 d-flex justify-content-center CanYouSolve coding ps-2'>Can you solve these questions?</p>
          
                  <div className='row justify-content-center pb-xl-4'>
                      <div className='col-md-10 col-xl-8 justify-content-evenly bg-white questions-1 rounded-4 shadow-lg ps-2 ps-md-0'>
                        <div className='container px-xxl-5 px-md-4 '>
                        <p>Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?</p>
                        <div className='row pt-3 pb-5'>
                        <div className='col-md-4'>
                         <div className='pb-4'>
                          <input className='' type="radio" /> <label className='lables'>do-while</label>
                         </div>
                          <div>
                           <input className='' type="radio" /> <label className='lables'>for</label>
                          </div> 
                      </div>

                      
                      <div className='col-md-4 col-md-6 col-lg-4 col-xl-5 col-xxl-4'>
                        <div className='pb-4 pt-4 pt-md-0'>
                          <input className='' type="radio" /> <label className='lables'>While</label>
                        </div>
                        <div>
                          <input className='' type="radio" /> <label className='lables'>none of the mentioned</label>
                        </div>
                        </div>

                      </div>
                        <Link className="text-decoration-none text-white py-2 px-4 rounded-2 KnowMore">Submit Answer</Link>
                        </div>
                      </div>

          </div>
       </div>
      
    </div>
    
  )
}

export default Home
