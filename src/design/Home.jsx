import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../app/pages/Dashboard";
import About from "../app/pages/About";
import { MenuContext } from "../layout/context/menucontext";

const Home = ({ children }) => {
  const RenderizadorDeComponente = () => {
    const { activeMenu } = useContext(MenuContext);
    console.log("fff", activeMenu);
    // Lógica de renderizado condicional
    let componente;
    switch (activeMenu) {
      case "/":
        componente = <Dashboard />;
        break;
      case "/About":
        componente = <About />;
        break;
      default:
        componente = <Dashboard />;
    }

    return componente;
  };

  const menu = (
    <React.Fragment>
      <Routes>
        <Route exact path="*" element={<Dashboard />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </React.Fragment>
  );

  return <Layout>{RenderizadorDeComponente}</Layout>;
};

export default Home;
