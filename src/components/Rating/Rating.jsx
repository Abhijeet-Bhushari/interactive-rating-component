import React from "react";
import "./rating.css";

export default function Rating() {
  //     1 2 3 4 5
  //   Submit You selected out of 5 Thank you! We appreciate you taking the time
  //   to give a rating. If you ever need more support, don’t hesitate to get in
  //   touch!

  return (
    <div>
      <div className="rating-container">
        <div className="rating-wrapper">
          <div className="rating-icon">
            <img src="../../images/icon-star.svg" alt="" />
          </div>
          <div className="rating-text">
            <div className="rating-heading">How did we do?</div>
            <div className="rating-desc">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
          </div>
          <div className="rating-stars">
            <button className="rating-star">1</button>
            <button className="rating-star">2</button>
            <button className="rating-star">3</button>
            <button className="rating-star">4</button>
            <button className="rating-star">5</button>
          </div>
          <button className="rating-button">SUBMIT</button>
        </div>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </div>
  );
}
