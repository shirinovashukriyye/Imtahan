import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="container">
      <div className={styles.heros}>
        <div className={styles.lefthero}>
          <h2>Wood & Cloth Sofa</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            numquam?
          </p>
          <button className="btn btn-warning">Buy now</button>
        </div>
        <div className={styles.righthero}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
