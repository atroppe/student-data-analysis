import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
