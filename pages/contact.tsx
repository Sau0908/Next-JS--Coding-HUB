import Contact from "@/component/ContactUs/Contact";
import { withPrivateRoute } from "@/privateRoute/privateRoute";
import React from "react";

const contact = () => {
  return (
    <div id="/contact">
      <Contact />
    </div>
  );
};

export default withPrivateRoute(contact);
