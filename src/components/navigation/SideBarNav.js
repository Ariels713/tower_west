/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  navLink: {
    fontWeight: 300,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: "auto",
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    marginRight: theme.spacing(8),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
  divider: {
    width: "100%",
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const SidebarNav = (props) => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/"
        >
          Home
        </Typography>
        {/* <LandingPages /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/amenities"
        >
          Amenities
        </Typography>
        {/* <SupportedPages /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/community"
        >
          Community
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography
          variant="h6"
          color="textPrimary"
          gutterBottom
          component={Link}
          to="/availability"
        >
          Availability
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          fullWidth
          component={Link}
          to="/contact"
        >
          Buy Now
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
