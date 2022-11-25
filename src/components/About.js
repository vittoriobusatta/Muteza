import React from "react";
import flopet from "../assets/images/flopet.png";
import peelpet from "../assets/images/peelpet.png";
import serum from "../assets/images/serum.png";

function About() {
  return (
    <section className="about" data-scroll-section>
      <div className="about_title ">
        <h2 data-scroll className="size_h2 detect is-inview">
          <span className="row">
            <span>WHERE</span>
          </span>
          <span className="row gap">
            <span>SCIENCE</span>
          </span>
          <span className="row">
            <span>MEETS</span>
          </span>
          <span className="row">
            <span>NATURE</span>
          </span>
        </h2>
      </div>
      <div className="about_image ">
        <img
          data-scroll
          data-scroll-speed="1"
          className="orange_img is-inview"
          src={flopet}
          alt="orange"
        />
        <img className="serum_img" src={serum} alt="serum" />
        <img
          data-scroll
          data-scroll-speed="2"
          className="petal_img is-inview"
          src={peelpet}
          alt="petal"
        />
      </div>
      <div className="about_description ">
        <p>
          Each and every formula contains ingredients in the dosages that will
          do the most for your skin right now. Your formula keeps changing as
          your skin changes! mco sint eiumod culpa consuat en Mollit nostrud qui
          magna moollit nisi est officialin eudsece ecat adipisicing fugiat.
        </p>
      </div>
    </section>
  );
}

export default About;
