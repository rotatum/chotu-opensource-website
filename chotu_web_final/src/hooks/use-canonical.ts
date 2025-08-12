import { useLocation } from "react-router-dom";

export function useCanonicalUrl() {
  const location = useLocation();
  if (typeof window === "undefined") return location.pathname;
  return window.location.origin + location.pathname;
}
