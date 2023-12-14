import Course from "@/component/Course/Course";
import { withPrivateRoute } from "@/privateRoute/privateRoute";
import React from "react";

const course = () => {
  return (
    <div id="/course">
      <Course />
    </div>
  );
};

export default withPrivateRoute(course);
