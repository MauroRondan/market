import AppMenuitem from "./AppMenuitem";
import AppItem from "./AppItem";
import { MenuProvider } from "./context/menucontext";
import { menu as model } from "../routes";

const AppMenu = () => {
  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={i} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
