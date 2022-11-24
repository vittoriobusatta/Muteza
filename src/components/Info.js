import React from "react";
import frag from "../assets/icons/frag.svg";
import glut from "../assets/icons/glut.svg";
import crue from "../assets/icons/crue.svg";
import sulp from "../assets/icons/sulp.svg";
import info from "../assets/images/info.jpg";

function Info() {
  return (
    <>
      <section class="info" data-scroll-section="">
        <h2 class="size_h2">
          Get the right ingredients at the right amounts for your skin.
        </h2>
        <ul class="info_content">
          <li className="frag ">
            <div>
              <img className="icons" src={frag} alt="no Perfume" />
              <p>No Added Fragrance</p>
            </div>
          </li>
          <li className="sulp">
            <div>
              <img className="icons" src={sulp} alt="no Sulphate" />
              <p>Sulphate Free</p>
            </div>
          </li>

          <li
            data-scroll=""
            data-scroll-speed="1.5"
            class="img-detect is-inview div1"
          >
            <img src={info} alt="Tailored just for you" />
          </li>

          <li className="glut">
            <div>
              <img className="icons" src={glut} alt="no Gluten" />
              <p>Gluten-free</p>
            </div>
          </li>
          <li className="crue">
            <div>
              <img className="icons" src={crue} alt="no Harshness" />
              <p>Cruelty-free</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Info;
