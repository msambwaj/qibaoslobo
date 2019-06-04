import React from "react";
import pic1 from "../imgs/tempImgs/pic1.png";
import pic2 from "../imgs/tempImgs/pic2.png";
import pic3 from "../imgs/tempImgs/pic3.png";
import pic4 from "../imgs/tempImgs/pic4.png";
import pic5 from "../imgs/tempImgs/pic5.png";
import pic6 from "../imgs/tempImgs/pic6.png";
import "./MainCenter.css";

const MainCenter = props => {
  return (
    <div className="main-container">
      <div className="words-above">
        <p className="heading">service business</p>

        <hr className="small-line" />

        <p className="min-words">Words here</p>
      </div>
      <div className="inner-container">
        <div className="image-container">
          <img alt="" src={pic1} />
          <h1 className="head-image">props.head</h1>
          <p className="tint-text">Artificial intelligance. Large data</p>
          <p>props.paragraph</p>
        </div>

        <div className="image-container">
          <img alt="" src={pic2} />
          <h1 className="head-image">props.head</h1>
          <p className="tint-text">Mobile officing</p>
          <p>props.paragraph</p>
        </div>

        <div className="image-container">
          <img alt="" src={pic4} />
          <h1 className="head-image">props.head</h1>
          <p className="tint-text">
            Instant messaging and online customer service
          </p>
          <p>props.paragraph</p>
        </div>

        <div className="image-container">
          <img alt="" src={pic3} />
          <h1 className="head-image">props.head</h1>
          <p className="tint-text">Online education</p>
          <p>props.paragraph</p>
        </div>

        <div className="image-container">
          <img alt="" src={pic5} />
          <h1 className="head-image">props.head</h1>
          <p className="tint-text">Development cloud</p>
          <p>props.paragraph</p>
        </div>

        <div className="image-container">
          <img alt="" src={pic6} />
          <h1 className="head-image">props.head</h1>
          <p className="tint-text">Service outsourcing</p>
          <p>props.paragraph</p>
        </div>
      </div>
    </div>
  );
};

export default MainCenter;
