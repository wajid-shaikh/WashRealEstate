import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
// import AboutUs from "./Components/AboutUs";
// import ContactUs from "./Components/ContactUs";
import Property from "./Components/Property";
import PropertyDetails from "./Components/PropertyDetails";
import CreateProperty from "./Pages/CreateProperty";
import PropertiesList from "./Pages/PropertiesList";
import ReadProperty from "./Pages/ReadProperty";
import UpdateProperty from "./Pages/UpdateProperty";
import CreateUser from "./Pages/Auth User/CreateUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* <Route exact path="/contactus" element={<ContactUs />} /> */}
          <Route exact path="/property" element={<Property />} />
          <Route exact path="/propertydetails" element={<PropertyDetails />} />

          {/* // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Admin Panel Routes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
          <Route
            exact
            path="/api/createproperties"
            element={<CreateProperty />}
          />
          <Route
            exact
            path="/api/propertieslist"
            element={<PropertiesList />}
          />
          <Route
            exact
            path="/api/readproperty/:id"
            element={<ReadProperty />}
          />
          <Route
            exact
            path="/api/updateproperty/:id"
            element={<UpdateProperty />}
          />

          {/* // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> User Routes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
          <Route exact path="/api/createuser" element={<CreateUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
