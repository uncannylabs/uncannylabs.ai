import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./lib/theme-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SWRConfig value={{ fetcher }}>
        <Switch>
          <Route path="/" component={Profile} />
          <Route>404 Page Not Found</Route>
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  </StrictMode>,
);
