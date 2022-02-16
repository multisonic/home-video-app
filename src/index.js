import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppSingle from "./AppSingle";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppSingle /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
