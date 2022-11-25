import React from 'react'
import fivestar from "../assets/images/fivestar.png";
import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.jpg";

function Reviews() {
  return (
    <section className="review" data-scroll-section data-scroll-section-inview>
      <div className="review_left">
        <h2 className="size_h2">REVIEWS</h2><br />
         <ul>
           <li>
             <img src={fivestar} alt="5-Star" />
             <p>
              Best first experience with a skincare product! Within 3 days, 
              I saw changes to my skin - improving texture, moisture, and 
              softening of fine lines.
              <span>— Michelle</span>
             </p>
           </li>
           <li>
            <img src={fivestar} alt="5-Star" />
            <p>
              It absorbs quickly and leaves my face feeling clean. It 
              seemed to help clear up a few small breakout spots 
              pretty quickly after I started using it.
             <span>— Jen</span>
            </p>
          </li>
          <li>
            <img src={fivestar} alt="5-Star" />
            <p>
              This has already changed my skin in a month! And the ever 
              changing serum taking into account changes to my skincare 
              regimen and seasonal changes is amazing!
             <span>— Delilah</span>
            </p>
          </li>
         </ul>
      </div>
      <div className="review_right">
        <div className="c-beforeafter c-beforeafter--left">
          <div>
            <img src={review1} alt="Make your face pretty" />
            <p>
              I don’t wear makeup very often, but when I do I go for a 
              natural, no-makeup look. This skin tint and concealer gives 
              exactly that. It helps even out my skin tone and looks very 
              natural.
              <span>— Min</span>
             </p>
          </div>
        </div>
        <div className="c-beforeafter c-beforeafter--right">
          <div data-scroll data-scroll-speed="1.2" className="is-inview">
            <img src={review2} alt="Make your face pretty" />
            <p>
              I don’t wear makeup very often, but when I do I go for a 
              natural, no-makeup look. This skin tint and concealer gives 
              exactly that.
              <span>— Casey</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews