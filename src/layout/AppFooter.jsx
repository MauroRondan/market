import React from "react";

const AppFooter = () => {
  return (
    <React.Fragment>
      <div className="layout-footer">
        <img
          src={`/layout/images/logo.png`}
          alt="Logo"
          height="20"
          className="mr-2"
        />
        by
        <span className="font-medium ml-2">STARSOFT</span>
      </div>
    </React.Fragment>
  );
};

export default AppFooter;
