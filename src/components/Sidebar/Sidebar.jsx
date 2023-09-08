import { faCircle, faLeaf, faPerson, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import initMenus from "../../data/menus.js";
import "./sidebar.css";
import MenuList from "./MenuList.jsx";
import { useNavigate } from "react-router-dom";

function Sidebar({ ...props }) {
  const navigate = useNavigate();
  const [menus, setMenus] = useState(initMenus);

  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar ${props.className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64 border-r-2 border-gray-00 h-full flex-col flex flex-shrink-0">
          {/* Logo */}
          <img src="https://i.postimg.cc/G29k9Cvb/logo.png" alt="logo" className=" py-2 w-32 mx-auto" />

          {/* Menu */}
          <MenuList menus={menus} toggle={props.toggle} />

          {/* Profile */}
          {/* Profile Button */}
          <button
            className="py-5 px-5  hover:border-blue-400 justify-end text-sm text-left"
            onClick={() => navigate("/profile")}
          >
            <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> Admin
          </button>
        </div>
      </aside>

      {props.className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={props.toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        >
          <div></div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
