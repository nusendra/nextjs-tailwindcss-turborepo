"use client";

import * as React from "react";

export const Button = () => {
  return (
    <button
      className="rounded-full bg-red-500 p-5"
      onClick={() => alert("boop")}
    >
      Boop
    </button>
  );
};
