import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Divider } from "@material-ui/core";
import Image from "../assets/Image";
import SectionHeader from "../assets/SectionHeader";
import MainHeader from "../mainHeader/MainHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "75%",
    margin: "3% auto",
  },
  placementGrid: {
    maxWidth: 320,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  coverImage: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
  span: {
    color: "#F9B933",
    fontWeight: "bold",
  },
  container: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    margin: "3% 0",
  },
}));

const Features = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <>
      <MainHeader headerImage="https://dl.airtable.com/.attachments/1b9607a4d7cd303303c0bdb6548475a7/60182c7f/full8.jpg" />
      <div className={clsx(classes.root, className)} {...rest}>
        <SectionHeader
          title={
            <span>
              Featured Amenities at{" "}
              <span className={classes.span}>Tower West Apartments</span>
            </span>
          }
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          data-aos="fade-up"
          style={{ marginBottom: "5%" }}
        />
        <Divider className={classes.divider} />
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            className={classes.container}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SectionHeader
                  title={
                    <span>
                      A pool with a
                      <br />
                      <span className={classes.span}>View</span>
                    </span>
                  }
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                  align="left"
                  fadeUp
                  disableGutter
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.placementGrid}></div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            data-aos="fade-up"
          >
            <Image
              src="https://dl.airtable.com/.attachments/67eb27ba370a9f9f4de63bbdc6c42916/66b73f48/full2.jpg"
              alt="..."
              className={classes.coverImage}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </div>

      <div className={clsx(classes.root, className)} {...rest}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            data-aos="fade-up"
          >
            <Image
              src="https://dl.airtable.com/.attachments/b7f2e1ea35aa66804a58505b1aced5b6/21c38ba3/full5.jpg"
              alt="..."
              className={classes.coverImage}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            className={classes.container}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SectionHeader
                  title={
                    <span>
                      State of the art
                      <br />
                      <span className={classes.span}>Fitness Center</span>
                    </span>
                  }
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                  align="left"
                  fadeUp
                  disableGutter
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.placementGrid}></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </div>

      <div className={clsx(classes.root, className)} {...rest}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            className={classes.container}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SectionHeader
                  title={
                    <span>
                      Newly Renovated Indoor and Outdoor
                      <br />
                      <span className={classes.span}>Parking</span>
                    </span>
                  }
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                  align="left"
                  fadeUp
                  disableGutter
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.placementGrid}></div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            data-aos="fade-up"
          >
            <Image
              src="https://dl.airtable.com/.attachments/9bbf7dbc030fe584c05e8c2bc5ece270/9ad5582f/8cd16365809cc903908d8b88b9dc6c3c0b26aded_original.jpg"
              alt="..."
              className={classes.coverImage}
            />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </div>
      <div className={clsx(classes.root, className)} {...rest}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            data-aos="fade-up"
          >
            <Image
              src="https://dl.airtable.com/.attachments/69d490a824d26bfbe95c837dcdd72f5a/9b53ea98/a064484f6708b2afe479e89723821683-uncropped_scaled_within_1536_1152.jpg"
              alt="..."
              className={classes.coverImage}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            className={classes.container}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SectionHeader
                  title={
                    <span>
                      Tastefully Designed Lobby and
                      <br />
                      <span className={classes.span}>Interiors</span>
                    </span>
                  }
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                  align="left"
                  fadeUp
                  disableGutter
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.placementGrid}></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </div>
    </>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
