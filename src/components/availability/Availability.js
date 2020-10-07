import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

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
  Button,
} from "@material-ui/core";
//icons
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import HotelOutlinedIcon from "@material-ui/icons/HotelOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import MainHeader from "../mainHeader/MainHeader";
import SectionHeader from "../assets/SectionHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    margin: "5% auto",
  },
  card: {
    boxShadow: "0 7px 14px 0 rgba(0, 0, 0, 0.1)",
    maxWidth: "350px",
    minWidth: "350px",
    margin: "auto",
  },
  cardMedia: {
    minHeight: 280,
    // maxWidth: 350,
    // minWidth: 350,
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
    marginLeft: "1%",
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
  // container: {
  //   width: "75%",
  //   margin: "auto",
  // },
  button: {
    backgroundColor: "transparent",
    color: "#F9B933",
    width: "100%",
  },
}));

const FeaturedProperties = (props) => {
  const [listings, setListings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [progress] = useState(0);

  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  useEffect(() => {
    const realtorData = async (e) => {
      try {
        const res = await fetch(
          "https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&postal_code=07093&city=west%20new%20york&offset=0&limit=150&state_code=NJ",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "realtor.p.rapidapi.com",
              "x-rapidapi-key":
                "fb513c0cbamsh08e1a654c8a450dp1c9d9ajsn3d9ca7fba7b7",
            },
          }
        );
        const data = await res.json();
        setListings(data);
        setIsLoading(false);
      } catch (error) {}
    };
    realtorData();
  }, []);

  return (
    <>
      <MainHeader headerImage="https://dl.airtable.com/.attachments/69d490a824d26bfbe95c837dcdd72f5a/9b53ea98/a064484f6708b2afe479e89723821683-uncropped_scaled_within_1536_1152.jpg" />

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
          style={{ marginTop: "3%" }}
        />
      </div>

      {isLoading ? (
        <CircularProgress variant="determinate" value={progress} />
      ) : (
        <div className={clsx(classes.root, className)} {...rest}>
          <Grid container spacing={isMd ? 4 : 2} className={classes.container}>
            {console.log(listings.listings)}
            {listings.listings.map((item) => {
              let regex = /6050/;
              let str = item.address;
              let result = regex.test(str);
              if (result) {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={item.property_id}
                    data-aos="fade-up"
                  >
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={item.photo}
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
                              <BusinessOutlinedIcon
                                style={{ color: "#F9B933" }}
                              />
                            </ListItemIcon>
                            <Typography
                              color="textPrimary"
                              variant="subtitle1"
                              className={classes.fontWeight500}
                            >
                              Apartment at Tower West
                            </Typography>
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
                              <ListItem
                                disableGutters
                                className={classes.listItem}
                              >
                                <ListItemIcon className={classes.listItemIcon}>
                                  <HomeOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText>
                                  {/* {`${item.sqft_raw} Sq Ft.`} */}
                                  {item.sqft_raw === null
                                    ? "Sq Ft. Unknown"
                                    : `${item.sqft_raw} Sq Ft.`}
                                </ListItemText>
                              </ListItem>
                            </List>
                          </Grid>
                          <Grid item xs={6}>
                            <List
                              disablePadding
                              className={classes.propertyList}
                            >
                              <ListItem
                                disableGutters
                                className={classes.listItem}
                              >
                                <ListItemIcon className={classes.listItemIcon}>
                                  <BathtubOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={item.baths} />
                              </ListItem>
                              <ListItem
                                disableGutters
                                className={classes.listItem}
                              >
                                <ListItemIcon className={classes.listItemIcon}>
                                  <HotelOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={item.beds} />
                              </ListItem>
                            </List>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <Button
                        size="small"
                        className={classes.button}
                        disableRipple
                        disableFocusRipple
                        target="blank"
                        href={item.rdc_web_url}
                      >
                        Learn More
                      </Button>
                    </Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </div>
      )}
    </>
  );
};

// FeaturedProperties.propTypes = {
//   /**
//    * External classes
//    */
//   className: PropTypes.string,
//   /**
//    * data to be rendered
//    */
//   data: PropTypes.array.isRequired,
// };

export default FeaturedProperties;
