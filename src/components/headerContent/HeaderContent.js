import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import SectionHeader from "../assets/SectionHeader";
import DescriptionListIcon from "../assets/DescriptionListIcon";
import { advantages } from "./dummyData";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "#F7F9FA",
    // margin: "10%",
  },
  container: {
    maxWidth: "75%",
    paddingTop: "5%",
    margin: "auto",
  },
  span: {
    color: "#F9B933",
  },
}));

const HeaderContent = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.container}>
        <SectionHeader
          title={
            <span>
              Lorem ipsum dolor sit amet{" "}
              <span className={classes.span}>Tower West Apartments</span>
            </span>
          }
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          fadeUp
        />
        <Grid container spacing={4}>
          {advantages.map((item, index) => (
            <Grid key={index} item xs={12} md={3} data-aos="fade-up">
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                style={{ marginBottom: "10%" }}
                icon={<RoomOutlinedIcon style={{ color: "#F9B933" }} />}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default HeaderContent;
