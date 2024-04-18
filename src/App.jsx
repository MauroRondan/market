import React, { Suspense, useContext } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { HashRouter, Route, Routes } from "react-router-dom";
import { SessionContext } from "./hooks/SessionContext";
import { LayoutProvider } from "./layout/context/layoutcontext.tsx";
import Login from "./auth/login/login";
import Dashboard from "./app/pages/Dashboard";
import About from "./app/pages/About";
import Layout from "./layout/Layout";
import Home from "./design/Home";

// App.jsx

function App({ props }) {
  const { token } = useContext(SessionContext);

  const menu = (
    <LayoutProvider>
      <Home />
    </LayoutProvider>
  );

  return (
    <React.Fragment>
      <HashRouter>
        <Suspense
          fallback={
            <div className="pt-3 text-center">
              <ProgressSpinner />
            </div>
          }
        >
          <Routes>
            {/* {token === undefined || token === null || token === "" ? (
              <Route
                exact
                path="/login"
                name="Login Page"
                element={<Login />}
              />    
            ) : ( */}
            <Route exact path="*" name="Home" element={menu} />
            <Route exact path="/Login" name="Login" element={<Login />} />
            {/* )} */}
          </Routes>
        </Suspense>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
