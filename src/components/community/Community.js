import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Form from "./Form";
import Mainheader from "../mainHeader/MainHeader";
import { mapData } from "./mapData";
import Local from "./Local";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

const ContactPageSidebarMap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Mainheader />
      {/* <MapDetails /> */}
      <Form data={mapData} />
      <Divider />
      <Local />
    </div>
  );
};

export default ContactPageSidebarMap;
