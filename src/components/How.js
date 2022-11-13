import React from "react";
import how3 from "../assets/images/how3.jpg";

function How() {
  return (
    <div>
      <section class="how" data-scroll-section="">
        <div class="how_title is-inview" data-scroll="" data-scroll-speed="1.6">
          <div>
            <h2 data-scroll="" class="size_h2 detect is-inview">
              <span class="row">
                <span>HOW THIS</span>
              </span>
              <span class="row">
                <span>WORKS</span>
              </span>
            </h2>
          </div>
          <p>
            We take care of everything, you just have to test your skin and
            apply serum.
          </p>
          <div
            class="img-detect is-inview"
            data-scroll=""
            data-scroll-offset="10%"
          >
            <img src={how3} alt="lady" />
          </div>
        </div>
        <div class="how_steps">
          <ul>
            <li>
              <h3>
                <span>01</span>
                <br />
                Test your skin
              </h3>
              <p>
                Use our at-home skin test to formulate your custom serum.
                Nothing to mail back!
              </p>
            </li>
            <li>
              <h3>
                <span>02</span>
                <br />
                Preview Your Formula
              </h3>
              <p>
                After completing your Skin Health Kit, you’ll see your Skin
                Report and preview the ingredients in your formula.
              </p>
            </li>
            <li>
              <h3>
                <span>03</span>
                <br />
                Apply Serum
              </h3>
              <p>
                Receive your custom serum in a few days. It’s designed to work
                with your existing routine.
              </p>
            </li>
            <li>
              <h3>
                <span>04</span>
                <br />
                Adapt and Perfect
              </h3>
              <p>
                Each month, we’ll adapt your formula so it continues to change
                as your skin changes.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default How;
