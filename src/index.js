import React from "react"; // Importing React for JSX and state management
import { createRoot } from "react-dom/client"; // Importing createRoot for rendering the component in the DOM

import MainContent from "./js/MainContent"; // Importing the MainContent component
import "./styles/Index.css"; // Importing the CSS file for styling

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root"); // Selecting the root element in the HTML where the React app will be mounted

if (!rootElement) throw new Error("Failed to find the root h1"); // Error handling if the root element is not found

const root = createRoot(rootElement); // Initializing React's root for rendering the app

root.render(<MainContent />); // Rendering the MainContent component in the root element
