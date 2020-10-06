import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import SectionHeader from "../assets/SectionHeader";
//icons
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "3% auto",
    backgroundColor: "#F7F9FA",
    padding: "3%",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    maxWidth: "75%",
    margin: "auto",
  },
  listItemText: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 auto",
  },
  listItem: {
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
  footerContainer: {
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
}));

const Contact = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <>
      <div className={clsx(classes.root, className)} {...rest}>
        <div className={classes.footerContainer}>
          <SectionHeader
            title="Contact details"
            subtitle="Our contact details. We carefully read and answer to all your questions."
            data-aos="fade-up"
            align={isMd ? "center" : "left"}
          />
          <List disablePadding className={classes.list}>
            <ListItem
              disableGutters
              data-aos="fade-up"
              className={classes.listItem}
            >
              <ListItemAvatar className={classes.listItemAvatar}>
                <PhoneOutlinedIcon
                  style={{ color: "#F9B933", fontSize: "2rem" }}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.listItemText}
                primary="Phone"
                secondary="201 869 1944"
                primaryTypographyProps={{
                  className: classes.title,
                  variant: "subtitle1",
                  color: "textSecondary",
                }}
                secondaryTypographyProps={{
                  variant: "subtitle1",
                  color: "textPrimary",
                  component: "span",
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              data-aos="fade-up"
              className={classes.listItem}
            >
              <ListItemAvatar className={classes.listItemAvatar}>
                <EmailOutlinedIcon
                  style={{ color: "#F9B933", fontSize: "2rem" }}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.listItemText}
                primary="Email"
                secondary="hi@maccarianagency.com"
                primaryTypographyProps={{
                  className: classes.title,
                  variant: "subtitle1",
                  color: "textSecondary",
                }}
                secondaryTypographyProps={{
                  variant: "subtitle1",
                  color: "textPrimary",
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              data-aos="fade-up"
              className={classes.listItem}
            >
              <ListItemAvatar className={classes.listItemAvatar}>
                <BusinessOutlinedIcon
                  style={{ color: "#F9B933", fontSize: "2rem" }}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.listItemText}
                primary="Head Office"
                secondary="Via E. Golla 4"
                primaryTypographyProps={{
                  className: classes.title,
                  variant: "subtitle1",
                  color: "textSecondary",
                }}
                secondaryTypographyProps={{
                  variant: "subtitle1",
                  color: "textPrimary",
                }}
              />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
