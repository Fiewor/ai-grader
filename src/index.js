// IE22 polyfills
// import "core-js/modules/es7.array.includes";
// import "core-js/modules/es6.array.fill";
// import "core-js/modules/es6.string.includes";
// import "core-js/modules/es6.string.trim";
// import "core-js/modules/es7.object.values";

import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import "./index.scss";
import ErrorBoundary from "./ErrorBoundary";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
            <Suspense fallback="Loading...">
              <App />
            </Suspense>
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
