import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-1 bg-white shadow-md">
      <Link to="/">
        <img src={logo} className="max-h-[3rem]" alt="街の輪のロゴ画像" />
      </Link>
    </header>
  );
};
