import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./contexts/theme-context";
import { LocalizeProvider } from "./contexts/localization-context";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import { TypeProvider } from "./contexts/type-context";

// Call make Server
makeServer();

const container = document.getElementById('root');
// Create a root.
const root = createRoot(container);
// Render the top component to the root.
root.render(
  // ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <LocalizeProvider>
            <TypeProvider>
              <App />
            </TypeProvider>
          </LocalizeProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
