import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import Image from "../assets/Image";
import Section from "../assets/Section";
import SectionHeader from "../assets/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "47vw",
      maxWidth: 740,
      height: "100%",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
      height: "100%",
    },
    margin: "0",
  },
  content: {
    flex: "0 0 100%",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
}));

const ContactPageCover = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await fetch("/.netlify/functions/getContact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      resetForm();
      setSentMessage(true);
    } catch (err) {
      console.error(err);
    }
  };

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="https://i.ibb.co/P1vTzX4/contact-us-image.jpg"
              alt="Contact"
              className={classes.image}
            />
          </div>
          <div className={classes.content}>
            <SectionHeader
              title="Contact us"
              subtitle="Our goal is to be as helpful as possible."
              data-aos="fade-up"
              align="center"
            />
            {sentMessage ? (
              <SectionHeader
                title={
                  <span style={{ color: "#F9B933" }}>
                    Thanks For Reacting out.
                  </span>
                }
                subtitle="We'll be in contact soon"
                fadeUp
                style={{ marginTop: "1%" }}
              />
            ) : (
              <div className={classes.form}>
                <Grid container spacing={isMd ? 4 : 2}>
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.inputTitle}
                    >
                      Full name
                    </Typography>
                    <TextField
                      placeholder="Your full name"
                      variant="outlined"
                      size="medium"
                      name="fullname"
                      fullWidth
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.inputTitle}
                    >
                      E-mail
                    </Typography>
                    <TextField
                      placeholder="Your e-mail address"
                      variant="outlined"
                      size="medium"
                      name="email"
                      fullWidth
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} data-aos="fade-up">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.inputTitle}
                    >
                      Message
                    </Typography>
                    <TextField
                      placeholder="Your question about our services"
                      variant="outlined"
                      name="message"
                      fullWidth
                      multiline
                      rows={4}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item container justify="center" xs={12}>
                    <Button
                      onClick={submitHandler}
                      variant="contained"
                      type="submit"
                      color="primary"
                      size="large"
                      fullWidth
                      style={{ boxShadow: "none", backgroundColor: "#f9b933" }}
                    >
                      submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}
          </div>
        </div>
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageCover;
