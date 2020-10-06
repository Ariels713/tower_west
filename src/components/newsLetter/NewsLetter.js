import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Button } from "@material-ui/core";
import CardBase from "../assets/CardBase";
import SectionHeader from "../assets/SectionHeader";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    boxShadow: "none",
  },
}));

const Subscription = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <CardBase
        data-aos="fade-up"
        style={{
          boxShadow: "none",
          backgroundColor: "#F7F9FA",
          margin: "5% auto",
        }}
      >
        <SectionHeader
          title="Subscribe To Our Newsletter"
          subtitle="Don't lose a chance to be among the firsts to know about our upcoming news and updates."
          fadeUp
          style={{ marginTop: "1%" }}
        />
        <Grid
          container
          spacing={1}
          alignItems="center"
          style={{ width: "75%" }}
        >
          <Grid item xs={12} sm={9}>
            <TextField
              size="small"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              style={{ boxShadow: "none", backgroundColor: "#f9b933" }}
            >
              subscribe
            </Button>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
