import React from "react";
import arrow from "../assets/icons/arrow_black.svg";
import banner from "../assets/images/banner.jpg";

function Landing() {
  return (
    <>
      <section class="o-section c-banner col-12">
        <div class="c-banner_text col-7">
          <div class="c-banner_text_button">
            <div>
              <a href="u">
                <img class="b-cta" src={arrow} alt="Go" />
                <div class="c-banner_text_button--circle">
                  <p>
                    GET
                    <br />
                    YOURS NOW
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="c-banner_text_title">
            <h1 data-scroll="" class="detect is-inview">
              <span class="o-row u-shift">
                <span>*YOUR</span>
              </span>
              <span class="o-row">
                <span>PERSONALISED</span>
              </span>
              <span class="o-row u-shift u-bnr--padd">
                <span>
                  <span class="u-banner--serum">*MIRACLE /SERUM</span>SERUM TO
                </span>
              </span>
              <span class="o-row">
                <span>PERFECT SKIN</span>
              </span>
            </h1>
          </div>
        </div>
        <div class="c-banner_image col-5 img-detect is-inview" data-scroll="">
          <div data-scroll="" data-scroll-speed="-2" class="is-inview">
            <img src={banner} alt="Magical Serum" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
