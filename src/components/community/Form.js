import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import SectionHeader from "../assets/SectionHeader";
import HeroShaped from "../assets/HeroShaped";
import Maps from "../assets/Maps";

import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},
  map: {
    zIndex: 9,
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  heroleftSide: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(6),
    },
  },
  span: {
    color: "#F9B933",
  },
}));

const Form = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <div className={classes.heroleftSide}>
            <SectionHeader
              title={
                <span>
                  Exploring <span className={classes.span}>West New York</span>
                </span>
              }
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              subtitleColor="textPrimary"
              align="left"
              disableGutter
            />
            <Grid container spacing={isMd ? 4 : 2}>
              <Grid item xs={12} data-aos="fade-up">
                <ListItem disableGutters>
                  <ListItemIcon className={classes.listItemIcon}>
                    <RoomOutlinedIcon
                      style={{ color: "#F9B933", fontSize: "2rem" }}
                    />
                  </ListItemIcon>
                  <Typography variant="subtitle1" color="textPrimary">
                    Tower West Apartments
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon className={classes.listItemIcon}>
                    <RoomOutlinedIcon
                      style={{ color: "#F9B933", fontSize: "2rem" }}
                    />
                  </ListItemIcon>
                  <Typography variant="subtitle1" color="textPrimary">
                    Manhattan Bound Bus Stop
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon className={classes.listItemIcon}>
                    <RoomOutlinedIcon
                      style={{ color: "#F9B933", fontSize: "2rem" }}
                    />
                  </ListItemIcon>
                  <Typography variant="subtitle1" color="textPrimary">
                    EdgeWater Ferry Terminal
                  </Typography>
                </ListItem>
              </Grid>
            </Grid>
          </div>
        }
        rightSide={
          <Maps
            center={[40.7884, -74.01309]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Form;
