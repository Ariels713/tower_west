import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import MainHeader from "./components/mainHeader/MainHeader";
import HeaderContent from "./components/headerContent/HeaderContent";
import ViewsGallary from "./components/views/ViewsGallary";
import ContactPage from "./components/contactPage/ContactPage";

import NewsLetter from "./components/newsLetter/NewsLetter";
import Availability from "./components/availability/Availability";
import Contact from "./components/community/Contact";
import Community from "./components/community/Community";
import Amenities from "./components/amenities/Amenities";
function App() {
  return (
    <>
      <Navigation />
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
