import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { className, ...rest } = props;
  const classes = useStyles();

  const resetForm = () => {
    setEmail("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await fetch("/.netlify/functions/signUp", {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      });
      resetForm();
      setSubscribed(true);
    } catch (err) {
      console.error(err);
    }
  };

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

        {subscribed === true ? (
          <SectionHeader
            title={
              <span style={{ color: "#F9B933" }}>Thanks For Subscribing!</span>
            }
            subtitle="We'll keep you up to date on all Tower West Events!"
            fadeUp
            style={{ marginTop: "1%" }}
          />
        ) : (
          <Grid
            container
            spacing={1}
            alignItems="center"
            style={{ width: "75%" }}
          >
            <Grid item xs={12} sm={9}>
              <TextField
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                fullWidth
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                onClick={submitHandler}
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
        )}
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
