import React from "react";
import "./rating.css";

export default function Rating() {
  //     1 2 3 4 5
  //   Submit You selected out of 5 Thank you! We appreciate you taking the time
  //   to give a rating. If you ever need more support, don’t hesitate to get in
  //   touch!

  return (
      <div className="rating-container">
        <div className="rating-wrapper">
          <div className="rating-icon">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
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
            Frontend
          </a>
          . Coded by <a href="#">Abhijeet-Bhushari</a>.
        </div>
      </div>
  );
}
