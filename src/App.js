import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import SideBar from "./components/navigation/SideBar";
import MainHeader from "./components/mainHeader/MainHeader";
import HeaderContent from "./components/headerContent/HeaderContent";
import ViewsGallary from "./components/views/ViewsGallary";
import ContactPage from "./components/contactPage/ContactPage";

import NewsLetter from "./components/newsLetter/NewsLetter";
import Availability from "./components/availability/Availability";
import Contact from "./components/community/Contact";
import Community from "./components/community/Community";
import Amenities from "./components/amenities/Amenities";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;
  return (
    <>
      <Navigation onSidebarOpen={handleSidebarOpen} />
      <SideBar onClose={handleSidebarClose} open={open} variant="temporary" />
      <Switch>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/availability">
          <Availability />
        </Route>
        <Route exact path="/community">
          <Community />
        </Route>
        <Route exact path="/amenities">
          <Amenities />
        </Route>
        <Route exact path="/">
          <MainHeader />
          <HeaderContent />
          <ViewsGallary />
          <NewsLetter />
        </Route>
      </Switch>
      <Contact />
    </>
  );
}

export default App;
