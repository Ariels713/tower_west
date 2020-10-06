import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import SectionHeader from "../assets/SectionHeader";
import CardPromo from "../assets/CardPromo";
import { promoNumbers } from "./dummyData";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3% auto",
    maxWidth: "65%",
  },
  span: {
    color: "#F9B933",
    fontWeight: "bold",
  },
}));

const PromoNumbers = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
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
      <Grid container spacing={isMd ? 4 : 2}>
        {promoNumbers.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-up"
          >
            <CardPromo
              variant="outlined"
              liftUp
              align={isMd ? "left" : "center"}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              fontIconClass={item.icon}
              color={item.color}
              titleColor="secondary"
            />
          </Grid>
        ))}
      </Grid>
    </div>
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
