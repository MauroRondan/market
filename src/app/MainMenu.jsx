import { PrimeReactProvider } from "primereact/api";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Layout from "../layout/Layout";

import PropTypes from "prop-types";

const MainMenu = ({ children }) => {
  return (
    <PrimeReactProvider>
      <Layout>
        <Routes>
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Layout>
    </PrimeReactProvider>
  );
};

MainMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainMenu;
