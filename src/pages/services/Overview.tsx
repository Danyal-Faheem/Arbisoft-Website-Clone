import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EngineeringPanel } from "./EngineeringPanel";
import { ServicesGrid } from "./ServicesGrid";

export const Overview = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Arbisoft | ${location.pathname.slice(1)}`;
  }, []);

  return (
    <>
      <EngineeringPanel />
      <ServicesGrid />
    </>
  );
};
