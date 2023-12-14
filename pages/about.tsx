import About from "@/component/AboutUs/About";
import { withPrivateRoute } from "@/privateRoute/privateRoute";
import React from "react";

const about = () => {
  return (
    <div id="/about">
      <About />
    </div>
  );
};

export default withPrivateRoute(about);
