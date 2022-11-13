import React from "react";
import flopet from "../assets/images/flopet.png";
import peelpet from "../assets/images/peelpet.png";
import serum from "../assets/images/serum.png";

function About() {
  return (
    <>
      <section class="o-section c-about col-12">
        <div class="c-about_title col-4">
          <h2 data-scroll="" class="size_h2 detect is-inview">
            <span class="row">
              <span>WHERE</span>
            </span>
            <span class="row  gap">
              <span>SCIENCE</span>
            </span>
            <span class="row">
              <span>MEETS</span>
            </span>
            <span class="row">
              <span>NATURE</span>
            </span>
          </h2>
        </div>
        <div class="c-about_image col-4">
          <img
            data-scroll=""
            data-scroll-speed="1"
            class="u-about_img--left is-inview"
            src={flopet}
            alt="orange"
          />
          <img class="u-about_img--center" src={serum} alt="serum" />
          <img
            data-scroll=""
            data-scroll-speed="2"
            class="u-about_img--right is-inview"
            src={peelpet}
            alt="petal"
          />
        </div>
        <div class="c-about_para col-4">
          <p>
            Each and every formula contains ingredients in the dosages that will
            do the most for your skin right now. Your formula keeps changing as
            your skin changes! mco sint eiumod culpa consuat en Mollit nostrud
            qui magna moollit nisi est officialin eudsece ecat adipisicing
            fugiat.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
