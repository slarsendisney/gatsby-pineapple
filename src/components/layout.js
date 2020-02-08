import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

const Layout = ({ children }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
