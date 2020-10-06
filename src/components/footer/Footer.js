import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 0),
    },
    backgroundColor: "#F7F9FA",
  },
  footerContainer: {
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "#f9b933",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 30,
  },
  typography: {
    color: "#f9b933",
    fontWeight: 900,
    fontSize: "1.5rem",
    lineHeight: 1.25,
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4} style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={5}>
            <List disablePadding>
              <ListItem
                disableGutters
                className={classes.logoContainerItem}
              ></ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
              <Typography className={classes.typography}>
                Tower West Apartment
              </Typography>
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
