import React from "react";
import {Link} from 'react-router-dom'

const homepage = (props: homepageProps) => {
  return (
      <div>

    <section id="hero_section" className="top_cont_outer">
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_section">
            <div className="row">
              <div className="col-md-12">
                <div className="top_left_cont zoomIn wow animated">
                  <h2>
                    Vitality<br></br>
                  </h2>
                  <h2>Creating Healthier Communities</h2>
                  <div className="underline"></div>
                  <Link to="/login" className="read_more2">
                    Signup/Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="d-flex justify-content-around flex-wrap">
    <img src="./assets/img/pic15.png" alt=""/>
    <img src="./assets/img/pic1.png" alt=""/>
    <img src="./assets/img/pic10.png" alt=""/>
    <img src="./assets/img/pic9.png" alt=""/>
    <img src="./assets/img/pic14.png" alt=""/>
    <img src="./assets/img/pic12.png" alt=""/>
    </div>
    </div>

  );
};

interface homepageProps {}
export default homepage;
