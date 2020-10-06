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
  span: {
    fontWeight: "bold",
    color: "#F9B933",
  },
}));

const MainHeader = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="https://dl.airtable.com/.attachments/770eb2972b4f62390fa76ecef147de49/40c5d186/full1.jpg"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: "100%",
          height: "100%",
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title={<span className={classes.span}>Tower West</span>}
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
