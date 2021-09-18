import * as React from "react";
import { MacAppWindow } from "./AppWindow";

export const Terminal: React.FC = () => {
  const questions = ["name"];
  return (
    <>
      <div className="left-5 w-4/5 my-10 ml-10 rounded">
        <MacAppWindow />
        <div className="container bg-black bg-opacity-70 h-screen my-0">
          <p className="ml-2 text-white">$ ~: npm run IntroduceYourself</p>
          <p className="ml-2 text-white mt-1 ">
            [1/{questions.length}] name?: MugaYoshikawa
          </p>
        </div>
      </div>
    </>
  );
};
