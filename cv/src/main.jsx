import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import General from "./components/General.jsx";
import Educational from "./components/Educational.jsx";
import Practical from "./components/Practical.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <General />
    <Educational></Educational>
    <Practical></Practical>
  </StrictMode>
);
