import React from "react";
import reactDom from "react-dom/client";
import "./index.css";
import { TopPage } from "./pages";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
reactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TopPage />
  </React.StrictMode>,
);
