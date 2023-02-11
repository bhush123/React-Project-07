import React from "react";
import aboutImg1 from "./Images/call_back.svg";

const About = () => {
  return (
    <div className="container marginAllcomp">
      <h3 className="py-4 pt-5 mb-0 ">About Us:</h3>
      <div className="row pb-5">
        <div className="col-lg-8 order-last">
          <p>
            Since its inception in 1999, LearnCoding Computer Training Institute
            has been effectively substantiating the ever rising needs of
            technical support in the social and business scenario. This computer
            institute in puneis successfully paving its way through the fields
            of Programming and Engineering acting as a full proof educational
            facilitator thus consistently delivering the demand of industry
            ready professionals.
          </p>
          <p>
            LearnCoding has always been in the quest of building a technical
            edifice for the students with its underlying values and core
            competencies in technical excellence, quality training and
            innovative concepts.
          </p>
          <h3 className="mb-0 py-4">Vision:</h3>
          <p>
            To be recognized and respected as one of the premium associations of
            technical support with the quality of well groomed students,
            exemplifying technical excellence among the other training
            instututions in pune.
          </p>
        </div>

        <div className="col-lg-4 order-lg-last pb-5 pt-4 pb-lg-0 pt-lg-0">
          <img src={aboutImg1} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
