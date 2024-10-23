import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between border-b-2 p-4">
      <p className="text-4xl font-bold">Knowledge Cafe</p>
      <div className="w-14">
      <img src="../src/assets/images/profile.png" alt="" />
      </div>
    </div>
  );
}
