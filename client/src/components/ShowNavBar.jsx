import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const ShowNavBar = ({ children }) => {
  const location = useLocation();
  const [showNav, setshowNav] = useState(false);

  useEffect(() => {
    if (location.pathname == "/login") {
      setshowNav(false);
    } else {
      setshowNav(true);
    }
  }, [location]);
  return <div>{showNav && children}</div>;
};

export default ShowNavBar;
