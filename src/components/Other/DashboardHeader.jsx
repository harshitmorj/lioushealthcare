import {
  faBars,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


function DashboardHeader({ toggle }) {
  return (
    <div className="px-3 sm:px-8 pt-4  flex flex-wrap w-full justify-between items-center">
      <div className="flex flex-row gap-3">
        <div className="hidden md:flex flex-row gap-4 text-xl">
          <Link to="/">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </Link>
        </div>
        <div id="nameSection" className="flex flex-row gap-4 items-center">
          <a href="/" className="text font-semibold text-gray-500">Dashboards</a>
          <p className="text font-semibold text-gray-500">/</p>
          <p>Default</p>
        </div>
      </div>
      <div className="avaterSection flex items-center gap-2 sm:gap-6 text-slate-400">

        <p className="cursor-pointer md:hidden text-2xl" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;
