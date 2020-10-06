import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/Image";
import SectionHeader from "../assets/SectionHeader";
import Section from "../assets/Section";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "500px",
    position: "relative",
    background: "white",
    overflow: "hidden",
    margin: "auto",
  },
  image: {
    minHeight: 400,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  textWhite: {
    // color: "#F9B933",
    color: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: "3rem",
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const MainHeader = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="https://dl.airtable.com/.attachments/1e905a309170747a7a33e68b6b85a745/3b3de228/pexels-essow-kedelina-774712.jpg"
        //   src="https://i.ibb.co/gVjPHvF/pexels-burst-374870.jpg"
        // src="https://i.ibb.co/LCYfHDy/pexels-timur-saglambilek-87223.jpg"
        // src="https://i.ibb.co/NpTbXRv/pexels-kozymeii-kong-950745.jpg"
        // srcSet="/images/photos/about/hero-image.png 2x"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: "100%",
          height: "100%",
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title="Tower West"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: "h3",
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
    </div>
  );
};

MainHeader.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MainHeader;
