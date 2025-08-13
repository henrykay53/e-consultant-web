// ./hooks/useHashRoute.js
import { useState, useEffect, useCallback } from "react";

export default function useHashRoute() {
  // Get initial route (without the leading "#")
  const getHash = () => window.location.hash.replace(/^#/, "") || "/";

  const [route, setRoute] = useState(getHash);

  // Listen for hash changes
  useEffect(() => {
    const onHashChange = () => setRoute(getHash());
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  // Navigate function
  const navigate = useCallback((path) => {
    if (!path.startsWith("/")) path = "/" + path;
    window.location.hash = path;
  }, []);

  return [route, navigate];
}
