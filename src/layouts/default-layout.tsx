import * as React from "react";
import { TheFooter } from "../components/global/TheFooter";
import { TheHeader } from "../components/global/TheHeader";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div>
      <TheHeader />
      <main className="m-10">
          Muga Yoshikawa
      </main>
      <TheFooter />
    </div>
  );
};
