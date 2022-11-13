import React from "react";
import { ReactComponent as Vector } from "../assets/icons/vector.svg";

function Awwards() {
  return (
    <>
      <div id="awwards">
        <a href="https://www.vittoriobusatta.fr/">
          <Vector className="awwards_logo" />
          <p>Vittorio</p>
        </a>
      </div>
    </>
  );
}

export default Awwards;
