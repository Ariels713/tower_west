import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  colors,
} from "@material-ui/core";
import SectionHeader from "../assets/SectionHeader";
import CardProduct from "../assets/CardProduct";
import Image from "../assets/Image";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "3% auto",
    // maxWidth: "85%",
  },
  fontWeight700: {
    fontWeight: 700,
  },
  coverImage: {
    objectFit: "cover",
  },
  span: {
    color: "#F9B933",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    color: "#F9B933",
    width: "100%",
  },
  // card: {
  //   maxWidth: "350px",
  //   minWidth: "350px",
  // },
  container: {
    margin: "3% auto",
    maxWidth: "85%",
  },
}));

const PromoNumbers = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [progress] = useState(0);
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  useEffect(() => {
    const getLocal = async (event) => {
      try {
        const res = await fetch("/.netlify/functions/getLocal");
        const data = await res.json();
        setData(data);
        setIsloading(false);
      } catch (err) {}
    };

    getLocal();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress variant="determinate" value={progress} />
      ) : (
        <div className={clsx(classes.root, className)} {...rest}>
          <SectionHeader
            title={
              <span>
                Living IN <span className={classes.span}>West New York</span>
              </span>
            }
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
            fadeUp
          />
          <div className={classes.container}>
            <Grid container spacing={isMd ? 4 : 2}>
              {data.map((item) => (
                <Grid key={item.id} item xs={12} md={4} data-aos={"fade-up"}>
                  <CardProduct
                    className={classes.card}
                    withShadow
                    liftUp
                    mediaContent={
                      <Image
                        className={classes.coverImage}
                        src={item.image}
                        alt={item.title}
                        lazyProps={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    }
                    cardContent={
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            color="textPrimary"
                            align="left"
                            className={classes.fontWeight700}
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          container
                          alignItems="center"
                          wrap="nowrap"
                          xs={12}
                        ></Grid>
                        <Grid item xs={12}>
                          <Typography
                            noWrap
                            variant="body1"
                            color="primary"
                            className={classes.fontWeight700}
                          >
                            {item.type}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            size="small"
                            className={classes.button}
                            disableRipple
                            disableFocusRipple
                            target="blank"
                            href={item.href}
                          >
                            Learn More
                          </Button>
                        </Grid>
                      </Grid>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

PromoNumbers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PromoNumbers;
