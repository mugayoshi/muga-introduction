import * as React from "react";

export const MacAppWindow: React.FC = ({ children }) => {
  return (
    <>
      <div className="container h-6 bg-gray-300 rounded">
        <div className="flex flex-row">
          <div className="w-3 bg-red-300 h-3 rounded-full mt-1 ml-1" />
          <div className="w-3 bg-yellow-300 h-3 rounded-full mt-1 ml-1" />
          <div className="w-3 bg-green-500 h-3 rounded-full mt-1 ml-1" />
        </div>
      </div>
    </>
  );
};
