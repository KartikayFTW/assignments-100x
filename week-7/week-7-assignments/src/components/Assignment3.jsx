// Assignment4.js

import React from "react";
import { createReactElement, customRender } from "./CustomRenderer";

const Assignment3 = () => {
  const reactElement = createReactElement("https://google.com", "Visit Google");

  React.useEffect(() => {
    customRender(reactElement, "#assignment4-container");
  }, [reactElement]);

  return (
    <div>
      <div id="assignment4-container"></div>
    </div>
  );
};

export default Assignment3;
