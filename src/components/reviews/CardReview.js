import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper from "swiper";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import SectionHeader from "../assets/SectionHeader";

import CardReview from "../assets/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  swiperContainer: {
    width: "100%",
    maxWidth: 500,
  },
}));

const Reviews = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-container .swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      autoplay: {
        delay: 2000,
      },
    });
  });

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            Take at what are
            <span className={classes.span}>Residents</span>
            are saying.
          </span>
        }
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />
      <div className={clsx("swiper-container", classes.swiperContainer)}>
        <div className="swiper-wrapper">
          <CardReview
            className={"swiper-slide"}
            noBorder
            noShadow
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            authorName="Claire Iwatsu"
            authorTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            //   authorPhoto={item.authorPhoto}
          />
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

// Reviews.propTypes = {
//   /**
//    * External classes
//    */
//   className: PropTypes.string,
//   /**
//    * data to be rendered
//    */
//   data: PropTypes.array.isRequired,
// };

export default Reviews;
