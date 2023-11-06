"use client";

import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="text-center">
        <Triangle color="black" />
        <p>Memuat...</p>
      </div>
    </div>
  );
}
