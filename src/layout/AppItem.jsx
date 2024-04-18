import React, { useContext } from "react";
import { MenuContext } from "./context/menucontext";
import Dashboard from "../app/pages/Dashboard";
import About from "../app/pages/About";

const AppItem = (props) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const item = props.item;
  const key = props.parentKey
    ? `${props.parentKey}-${props.index}`
    : String(props.index);
  const isActive = activeMenu === key || activeMenu.startsWith(`${key}-`);

  const onItemClick = () => {
    if (!item.disabled) {
      setActiveMenu(isActive ? "" : key); // Toggle menu active state
    }
  };

  return (
    <li className={`menu-item ${isActive ? "active" : ""}`}>
      <a href="#" onClick={onItemClick}>
        {item.label}
      </a>
      {isActive && (
        <div className="submenu">
          {item.content === "A" && <Dashboard />}
          {item.content === "B" && <About />}
        </div>
      )}
    </li>
  );
};

export default AppItem;
