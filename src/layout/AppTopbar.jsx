import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { classNames } from "primereact/utils";
import { LayoutContext } from "./context/layoutcontext";
import { PrimeReactContext } from "primereact/api";

const AppTopbar = forwardRef((props, ref) => {
  const {
    layoutState,
    onMenuToggle,
    showProfileSidebar,
    layoutConfig,
    setLayoutConfig,
  } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);
  const { changeTheme } = useContext(PrimeReactContext);
  const [theme, setTheme] = useState(layoutConfig.theme);

  const _changeTheme = (theme, colorScheme) => {
    setTheme(colorScheme);
    changeTheme(layoutConfig.theme, theme, "theme-css", () => {
      setLayoutConfig((prevState) => ({ ...prevState, theme, colorScheme }));
    });
  };

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        <img
          // src={`/layout/images/logo-${
          //   layoutConfig.colorScheme !== "light" ? "white" : "dark"
          // }.svg`}
          src={`/layout/images/logo_Starsoft.png`}
          width="47.22px"
          height={"35px"}
          alt="logo"
        />
        <span>MARKET ADM</span>
      </Link>

      <button
        ref={menubuttonRef}
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button>

      <button
        ref={topbarmenubuttonRef}
        type="button"
        className="p-link layout-topbar-menu-button layout-topbar-button"
        onClick={showProfileSidebar}
      >
        <i className="pi pi-ellipsis-v" />
      </button>

      <div
        ref={topbarmenuRef}
        className={classNames("layout-topbar-menu", {
          "layout-topbar-menu-mobile-active": layoutState.profileSidebarVisible,
        })}
      >
        <button
          type="button"
          className="p-link layout-topbar-button"
          onClick={() =>
            _changeTheme(
              theme === "dark" ? "lara-light-teal" : "lara-dark-teal",
              theme === "dark" ? "light" : "dark"
            )
          }
        >
          <i className={theme === "dark" ? "pi pi-sun" : "pi pi-moon"}></i>
          <span>Tema</span>
        </button>
        <button type="button" className="p-link layout-topbar-button">
          <i className="pi pi-user"></i>
          <span>Usuario</span>
        </button>
        <Link href="/documentation">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-cog"></i>
            <span>Configuraciones</span>
          </button>
        </Link>
      </div>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;

// import { Menubar } from "primereact/menubar";

// const Navbar = () => {
//   const menuModel = [
//     {
//       label: "Home",
//       icon: "pi pi-home",
//       command: () => {
//         window.location.href = "/dashboard";
//       },
//     },
//     {
//       label: "About",
//       icon: "pi pi-info-circle",
//       command: () => {
//         window.location.href = "/about";
//       },
//     },
//     {
//       label: "Contact",
//       icon: "pi pi-envelope",
//       command: () => {
//         window.location.href = "/contact";
//       },
//     },
//   ];
//   return <Menubar model={menuModel} />;
// };

// export default Navbar;
