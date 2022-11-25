import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Loader() {
  let container = useRef(null);
  let circle = useRef(null);
  let title = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    const onLoad = () => {
      gsap.fromTo(
        container.current,
        { opacity: 1, y: 0 + "%", skewY: 0 + "deg" },
        {
          duration: 1.2,
          ease: "expo.out",
          delay: 3,
          y: -100 + "%",
          skewY: 2.5 + "deg",
        }
      );
      gsap.fromTo(
        title.current,
        {
          opacity: 1,
        },
        {
          delay: 2,
          y: -100 + "%",
        }
      );
      gsap.fromTo(
        text.current,
        {
          opacity: 1,
        },
        {
          delay: 2,
          y: -100 + "%",
        }
      );
      gsap.fromTo(
        circle.current,
        {
          opacity: 1,
        },
        {
          delay: 1.5,
          opacity: 0,
        }
      );
    };
    onLoad();
  }, []);

  return (
    <div ref={container} className="loader">
      <div className="loader_content">
        <h2 className="size_h2">
          <span ref={title} className="loader_title">
            <span>MUTEZA</span>
          </span>
        </h2>
        <h4>
          <span ref={text} className="loader_text">
            <span>Personalised Skin Serum</span>
          </span>
        </h4>
      </div>
      <div ref={circle} className="loader_circle"></div>
    </div>
  );
}

export default Loader;
