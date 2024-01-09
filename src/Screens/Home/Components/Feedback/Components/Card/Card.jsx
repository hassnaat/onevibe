import React from "react";
import "./Card.css";
import ColorStar from "../../../../../../assets/images/colorstar.png";
import GreyStar from "../../../../../../assets/images/greystar.png";
const FeedbackCard = ({ name, title, text, image, rating }) => {
  return (
    <div className="feedback__card_wrap">
      <div className="feedback__card_header">
        <div className="feedback__card_hleft">
          <div className="feedback__card_lfpic">
            <img src={image} alt="" />
          </div>
          <div className="feedback__card_hlcontent">
            <div className="feedback__card_hlcheading">{name}</div>
            <div className="feedback__card_hlctitle">{title}</div>
          </div>
        </div>
        <div className="feedback__card_hright">
          {[0, 0, 0, 0, 0].map((star, index) => (
            <img src={index < rating ? ColorStar : GreyStar} />
          ))}
        </div>
      </div>
      <div className="feedback__card_body">
        <div className="feedback__card_bheading">Customers Review</div>
        <div className="feedback__card_bdescription">{text}</div>
      </div>
    </div>
  );
};

export default FeedbackCard;
