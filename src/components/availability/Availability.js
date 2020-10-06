import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  colors,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
//icons
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";

import MainHeader from "../mainHeader/MainHeader";
import SectionHeader from "../assets/SectionHeader";
import { featuredProperties } from "./dummyData";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    margin: "5% auto",
  },
  card: {
    boxShadow: "0 7px 14px 0 rgba(0, 0, 0, 0.1)",
    maxWidth: "350px",
  },
  cardMedia: {
    minHeight: 280,
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
  },
  pricingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    width: "100%",
  },
  cardCta: {
    padding: theme.spacing(1 / 2, 1),
    background: "white",
    borderRadius: theme.spacing(1 / 2),
  },
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    minWidth: theme.spacing(3),
    "& i": {
      color: colors.blueGrey[500],
    },
    color: "#F9B933",
  },
  fontWeight500: {
    fontWeight: 500,
  },
  propertyList: {
    display: "flex",
  },
  pin: {
    color: `${colors.deepOrange[500]} !important`,
  },
  divider: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  span: {
    color: "#F9B933",
    fontWeight: "bold",
  },
}));

const FeaturedProperties = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <>
      <MainHeader />
      <div className={clsx(classes.root, className)} {...rest}>
        <SectionHeader
          title={
            <span>
              Featured Properties at{" "}
              <span className={classes.span}>Tower West Apartments</span>
            </span>
          }
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          data-aos="fade-up"
          //   style={{ marginTop: "5%" }}
        />

        <Grid container spacing={isMd ? 4 : 2}>
          {featuredProperties.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://i.ibb.co/gVjPHvF/pexels-burst-374870.jpg"
                >
                  <div className={classes.pricingContainer}>
                    <div className={classes.cardCta}>
                      <Typography color="primary" variant="subtitle1">
                        {item.price}
                      </Typography>
                    </div>
                    <div className={classes.cardCta}>
                      <Typography color="primary" variant="subtitle1">
                        <i className="far fa-heart" />
                      </Typography>
                    </div>
                  </div>
                </CardMedia>
                <CardContent>
                  <List disablePadding>
                    <ListItem disableGutters>
                      <ListItemIcon className={classes.listItemIcon}>
                        <RoomOutlinedIcon style={{ color: "#F9B933" }} />
                      </ListItemIcon>
                      <ListItemText primary={item.location} />
                    </ListItem>
                  </List>
                  <Typography
                    color="textPrimary"
                    variant="subtitle1"
                    className={classes.fontWeight500}
                  >
                    {item.address}
                  </Typography>
                  <Divider className={classes.divider} />
                  <Grid container>
                    <Grid item xs={6}>
                      <List disablePadding>
                        <ListItem disableGutters className={classes.listItem}>
                          <ListItemIcon className={classes.listItemIcon}>
                            <HomeOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.size} />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={6}>
                      <List disablePadding className={classes.propertyList}>
                        <ListItem disableGutters className={classes.listItem}>
                          <ListItemIcon className={classes.listItemIcon}>
                            <BathtubOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.baths} />
                        </ListItem>
                        <ListItem disableGutters className={classes.listItem}>
                          <ListItemIcon className={classes.listItemIcon}>
                            <HotelOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.rooms} />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

FeaturedProperties.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default FeaturedProperties;
