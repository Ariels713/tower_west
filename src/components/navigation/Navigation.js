import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { colors } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "../assets/Image";
import SideBarNav from "./SideBarNav";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: "#FFF",
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark,
    },
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
    fontSize: "1rem",
    textDecoration: "none",
    // color: theme.palette.primary.main,
    margin: "0 35px",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
    marginRight: "3%",
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    marginRight: theme.spacing(5),
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
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Topbar = (props) => {
  const { className, onSidebarOpen, pages, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar
          {...rest}
          position="fixed"
          className={clsx(classes.root, className)}
        >
          <Toolbar disableGutters className={classes.toolbar}>
            <div className={classes.logoContainer}>
              <a href="/" title="thefront">
                <Image
                  className={classes.logoImage}
                  src="https://svgshare.com/i/QF7.svg"
                  alt="Tower West Logo"
                  lazy={false}
                />
              </a>
            </div>
            <div className={classes.flexGrow} />
            <Hidden smDown>
              <List className={classes.navigationContainer}>
                <ListItem className={classes.listItem}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.listItemText}
                    component={Link}
                    to="/"
                  >
                    Home
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.listItemText}
                    component={Link}
                    to="/amenities"
                  >
                    Amenities
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.listItemText}
                    component={Link}
                    to="/community"
                  >
                    Community
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.listItemText}
                    component={Link}
                    to="/availability"
                  >
                    Availability
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    style={{ boxShadow: "none" }}
                    size="large"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/contact"
                  >
                    Contact
                  </Button>
                </ListItem>
              </List>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                aria-label="Menu"
                onClick={onSidebarOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{ marginBottom: "3rem" }} />
    </>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  // pages: PropTypes.object.isRequired,
};

export default Topbar;
