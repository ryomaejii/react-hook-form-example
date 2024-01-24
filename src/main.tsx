import React from "react";
import reactDom from "react-dom/client";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
reactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>hoge</div>
  </React.StrictMode>,
);
