// component/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const  ScrollToTop = ()=> {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop




// src/utils/gaEvents.js
export const logEvent = (action, params = {}) => {
  if (window.gtag) {
    window.gtag("event", action, params);
  }
};

