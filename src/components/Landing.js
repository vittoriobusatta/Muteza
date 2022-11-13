import React from "react";
import arrow from "../assets/icons/arrow_black.svg";
import banner from "../assets/images/banner.jpg";

function Landing() {
  return (
    <>
      <section className="landing">
        <div className="landing_left">
          <div className="landing_button">
            <div>
              <span>
                <img className="get_yours_circle" src={arrow} alt="Go" />
                <div className="get_yours_btn">
                  <p>
                    GET
                    <br />
                    YOURS NOW
                  </p>
                </div>
              </span>
            </div>
          </div>
          <div className="landing_title">
            <h1 className="detect is-inview">
              <span className="row gap">
                <span>*YOUR</span>
              </span>
              <span className="row">
                <span>PERSONALISED</span>
              </span>
              <span className="row gap padgap">
                <span className="serum_before">SERUM TO</span>
              </span>
              <span className="row">
                <span>PERFECT SKIN</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="landing_right img-detect is-inview">
          <div className=" landing_image is-inview">
            <img src={banner} alt="Magical Serum" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
