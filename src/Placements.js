import React from "react";
import placementImg1 from "./Images/ganesh.png";
import placementImg2 from "./Images/sanchita.png";
import placementImg3 from "./Images/Pradip.png";
import placementImg4 from "./Images/pratibha.png";
import placementImg5 from "./Images/sonwane.png";
import placementImg6 from "./Images/parigha.png";
import placementImg7 from "./Images/nitinShinde.png";
import placementImg8 from "./Images/supriya.png";


const Placements = () => {
  return (
    <div className="container overflow-hidden marginAllcomp">
      <h3 className="py-5 text-center">Our Placements</h3>
      <div className="row pb-4">
        
       <div className="col-lg-4 col-md-6 col-xl-3 d-flex justify-content-center">
       <figure>
          <img src={placementImg1} alt="" />
          <figcaption>
            <p className="mb-0 pt-1">Ganesh Kharje</p>
            <h6 className="fw-bold mb-0 py-2">Aurus</h6>
            <p className="mb-0">UI/UX Developer</p>
            <p>January, 2023</p>
          </figcaption>
        </figure>
       </div>

       <div className="col-lg-4 col-md-6 col-xl-3 d-flex justify-content-center">
       <figure>
          <img src={placementImg2} alt="" />
          <figcaption>
            <p className="mb-0 pt-1">Sanchita Dabhade</p>
            <h6 className="fw-bold mb-0 py-2">Cyperts Digital pvt.</h6>
            <p className="mb-0">UI/UX Developer</p>
            <p>January, 2023</p>
          </figcaption>
        </figure>
       </div>
       
       <div className="col-lg-4 col-md-6 col-xl-3 d-flex justify-content-center">
       <figure>
          <img src={placementImg3} alt="" />
          <figcaption>
            <p  className="mb-0 pt-1">Pradeep Gunjal</p>
            <h6 className="fw-bold mb-0 py-2">Teksolto Softwares</h6>
            <p className="mb-0">UI/UX Developer</p>
            <p>December, 2022</p>
          </figcaption>
        </figure>
       </div>
        
        <div className="col-lg-4 col-md-6 col-xl-3 d-flex justify-content-center">
        <figure>
          <img src={placementImg4} alt="" />
          <figcaption>
            <p  className="mb-0 pt-1">Pratibha Shah</p>
            <h6 className="fw-bold mb-0 py-2">Tract Cybernetics</h6>
            <p className="mb-0">Fronted Developer</p>
            <p>December, 2022</p>
          </figcaption>
        </figure>
        </div>
        
        <div className="col-lg-4 col-md-6 col-xl-3 d-flex justify-content-center">
        <figure>
          <img src={placementImg5} alt="" />
          <figcaption>
            <p  className="mb-0 pt-1">Pravin Sonawane</p>
            <h6 className="fw-bold mb-0 py-2">Aptlogica</h6>
            <p className="mb-0">UI/UX Developer</p>
            <p>February, 2023</p>
          </figcaption>
        </figure>
        </div>
       
       <div className="col-lg-4 col-md-6 col-xl-3 d-flex justify-content-center">
       <figure>
          <img src={placementImg6} alt="" />
          <figcaption>
            <p  className="mb-0 pt-1">Parigha Gadre</p>
            <h6 className="fw-bold mb-0 py-2">Heaptrace</h6>
            <p className="mb-0">UI/UX Designer</p>
            <p>November, 2022</p>
          </figcaption>
        </figure>
       </div>
       
        <div className="col-lg-4 col-md-6 col-xl-3  d-flex justify-content-center">
        <figure>
          <img src={placementImg7} alt="" />
          <figcaption>
            <p  className="mb-0 pt-1">Nitin Shinde</p>
            <h6 className="fw-bold mb-0 py-2">Heaptrace</h6>
            <p className="mb-0">UI/UX Designer</p>
            <p>November, 2022</p>
          </figcaption>
        </figure>
        </div>
       
       <div className="col-lg-4 col-md-6 col-xl-3  d-flex justify-content-center">
       <figure>
          <img src={placementImg8} alt="" />
          <figcaption>
            <p  className="mb-0 pt-1">Supriya Dale</p>
            <h6 className="fw-bold mb-0 py-2">Heaptrace</h6>
            <p className="mb-0">UI/UX Designer</p>
            <p>November, 2022</p>
          </figcaption>
        </figure>
       </div>
      </div>
    </div>
  );
};

export default Placements;
