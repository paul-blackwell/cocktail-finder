import React from "react";

export default function Button({ onClick, children }) {
  return <button className="w-full p-4 text-white bg-lightBlue-400" onClick={onClick}>{children}</button>;
}
