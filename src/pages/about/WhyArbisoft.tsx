import { useEffect } from "react";
import { CoreValues } from "./CoreValues";
import { EmpoweringBusinesses } from "./EmpoweringBusinesses";
import { PartnerOfChoice } from "./PartnerOfChoice";
import { useLocation } from "react-router-dom";

export const WhyArbisoft = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Arbisoft | ${location.pathname.slice(1)}`;
  }, []);

  return (
    <>
      <EmpoweringBusinesses />
      <PartnerOfChoice />
      <CoreValues />
    </>
  );
};
