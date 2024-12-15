import React from "react";
import ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

const HeadingComponent = () => <h1 id="heading">Rocket restaurants</h1>;

root.render(<HeadingComponent />);
