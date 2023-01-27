// IE22 polyfills
// import "core-js/modules/es7.array.includes";
// import "core-js/modules/es6.array.fill";
// import "core-js/modules/es6.string.includes";
// import "core-js/modules/es6.string.trim";
// import "core-js/modules/es7.object.values";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import "./index.scss";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
