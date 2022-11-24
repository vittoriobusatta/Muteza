import React from "react";
import ing from "../assets/images/ing.jpg";
import clock from "../assets/images/clock.png";
import leaf from "../assets/images/leaf.png";
import dropper from "../assets/images/dropper.png";

function Benefit() {
  return (
    <section
      className="benefit"
      data-scroll-section
      data-scroll-section-inview
    >
      <div className="benefit_image img-detect">
        <div className="is-inview" data-scroll data-scroll-speed="-1.5">
          <img src={ing} alt="benefits" />
        </div>
      </div>
      <div className="benefit_cards">
        <ul className="col-9">
          <li  className="is-inview" data-scroll data-scroll-speed="1">
            <div className="benefit--card u-benefit--color1">
              <h3>
                ADAPTS TO
                <br />
                YOUR NEEDS
              </h3>
              <p>
                As you do your skin test with our Skin Health Kit each month,
                your formulation will continue to adapt to the changing needs of
                your skin.
              </p>
              <img src={clock} alt="clock" />
            </div>
          </li>
          <li className="is-inview" data-scroll data-scroll-speed="2">
            <div className="benefit--card u-benefit--color2">
              <h3>
                BEST
                <br />
                INGREDIENTS
              </h3>
              <p>
                Developed with natural ingredients, the only scents you'll find
                in our products come from nature.
              </p>
              <img src={leaf} alt="leaf" />
            </div>
          </li>
          <li className="is-inview" data-scroll data-scroll-speed="3">
            <div className="benefit--card u-benefit--color3">
              <h3>
                YOUR PERFECT
                <br />
                DOSE
              </h3>
              <p>
                Each formula contains ingredients in the dosages that will do
                the most for your skin at that time.
              </p>
              <img src={dropper} alt="dropper" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}


export default Benefit;
