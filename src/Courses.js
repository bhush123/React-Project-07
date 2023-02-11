import React from "react";
import coursesImg from "./Images/tools_for_2020.svg";

const Courses = () => {
  return (
    <div className="container py-5 marginAllcomp">
      <h3>All Courses:</h3>

      <div className="row">
        <div className="col-lg-8 order-last">
          <p className="pt-4">
            21st century is dominated by IT industry. Almost every thing is
            available on a single mouse click. As the industry is expanding its
            horizon there is need for more and more professional developer to
            meet this ever increasing demand. Applications required for the
            industry is very diversified i.e Web Application, Stand alone
            Application, Mobile Application and many more. Hence need for these
            professional is very high. Learning programming language from best
            it training institute in pune can help you to get into this most
            wanted industry.
          </p>
        </div>
        <div className="col-lg-4 order-lg-last pt-3 pt-lg-0 text-center text-xl-end">
          <img src={coursesImg} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
