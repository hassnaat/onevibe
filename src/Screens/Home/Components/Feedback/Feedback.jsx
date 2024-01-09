import React from "react";
import "./Feedback.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeedbackCard from "./Components/Card/Card";
import Reviewer1 from "../../../../assets/images/reviewer.png";

const Feedback = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="homescreen__feedback_section">
      <div className="homescreen__feedback_sectitle">Feedback</div>
      <div className="homescreen__feedback_secheading">
        What Our Customer Say About Us
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        dotListClass="feedback__carcustom__dots"
        showArrows={false}
      >
        <FeedbackCard
          rating={4}
          image={Reviewer1}
          name="John Smith"
          title="Chief Executive Officer"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
        />
        <FeedbackCard
          rating={1}
          image={Reviewer1}
          name="John Smith"
          title="Chief Executive Officer"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
        />
        <FeedbackCard
          rating={2}
          image={Reviewer1}
          name="John Smith"
          title="Chief Executive Officer"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
        />
        <FeedbackCard
          rating={5}
          image={Reviewer1}
          name="John Smith"
          title="Chief Executive Officer"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
        />
        <FeedbackCard
          rating={3}
          image={Reviewer1}
          name="John Smith"
          title="Chief Executive Officer"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
        />
      </Carousel>
    </div>
  );
};

export default Feedback;
