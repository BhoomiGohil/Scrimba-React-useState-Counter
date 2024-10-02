import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./Practice10/MainContent";
import "./Practice10/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root");

if (!rootElement) throw new Error("Failed to find the root h1");

const root = createRoot(rootElement);

root.render(<MainContent />);
