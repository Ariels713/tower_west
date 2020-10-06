import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";
import Image from "../assets/Image";
import { folio } from "./dummyData";
import Section from "../assets/Section";
import SectionHeader from "../assets/SectionHeader";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75%",
    margin: " 5% auto",
  },
  folioItem: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    "&:hover": {
      "& .folio__image": {
        transform: "scale(1.4)",
      },
      "& .folio__info-wrapper": {
        top: 0,
      },
    },
  },
  folioInfoWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "100%",
    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, #000000)",
    padding: theme.spacing(4, 2),
    transition: "top .6s",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
  },
  image: {
    objectFit: "cover",
    transitionDuration: ".6s",
    transform: "scale(1.0)",
    borderRadius: theme.spacing(1),
  },
  folioTitle: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  folioSubtitle: {
    color: "white",
    textTransform: "capitalize",
    margin: theme.spacing(1, 0),
  },
  span: {
    color: "#F9B933",
    fontWeight: "bold",
  },
}));

const Gallery = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  useEffect(() => {
    const galleryphotos = async (event) => {
      try {
        const res = await fetch("/.netlify/functions/getGalleryPhotos");
        const data = await res.json();
        console.log(data[0].fields.cover[0].url);
        setData(data);
        // console.log(`state ${data}`);
        setIsloading(false);
      } catch (err) {}
    };

    galleryphotos();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress variant="determinate" value={progress} />
      ) : (
        <div className={clsx(classes.root, className)} {...rest}>
          <Section className={classes.section}>
            <SectionHeader
              title={
                <span>
                  Home At{" "}
                  <span className={classes.span}>Tower West Apartments</span>
                </span>
              }
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
              align="center"
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
          <GridList
            cellHeight={isMd ? 360 : 260}
            cols={3}
            spacing={isMd ? 24 : 8}
          >
            {data.map((item) => (
              <GridListTile
                key={item.id}
                cols={isMd ? item.fields.cols : 3 || 1}
              >
                <div className={classes.folioItem} key={item.id}>
                  <Image
                    src={item.fields.cover[0].url}
                    alt={item.fields.alt}
                    className={clsx("folio__image", classes.image)}
                    lazyProps={{ width: "100%", height: "100%" }}
                  />
                  <div
                    className={clsx(
                      "folio__info-wrapper",
                      classes.folioInfoWrapper
                    )}
                  >
                    <div className={classes.folioInfo}>
                      <Typography variant="h6" className={classes.folioTitle}>
                        {item.fields.title}
                      </Typography>
                      {/* <Typography
                        variant="subtitle1"
                        className={classes.folioSubtitle}
                      >
                        {item.subtitle}
                      </Typography> */}
                      {/* <Button variant="contained" color="secondary">
                    View more
                  </Button> */}
                    </div>
                  </div>
                </div>
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </>
  );
};

Gallery.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Gallery;
