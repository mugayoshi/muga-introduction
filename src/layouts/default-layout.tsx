import * as React from "react";
import { Terminal } from "../components/Terminal";
import { TheFooter } from "../components/global/TheFooter";
import { TheHeader } from "../components/global/TheHeader";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div>
      <TheHeader />
      <Terminal/>
      <TheFooter />
    </div>
  );
};
