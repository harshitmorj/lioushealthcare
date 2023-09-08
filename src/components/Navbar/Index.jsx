import { faBars, faStar, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import initMenus from "../../data/menus.js";
// ... (import statements)

function Index({ toggle }) {
  const [menus, setMenus] = useState(initMenus);

  // Function to find the active menu item and get its title
  const getCurrentMenuTitle = () => {
    const activeMenu = menus.find((menu) => menu.active);
    return activeMenu ? activeMenu.label : "Default Title"; // Provide a default title if none is found
  };

  return (
    <>
      <header className="">
        <div className="px-3 sm:px-8 pt-4  flex flex-wrap w-full justify-between items-center">
          <div className="flex flex-row gap-3">
            <div className="hidden md:flex flex-row gap-4 text-xl">
              <a href="/">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </a>
            </div>
            <div id="nameSection" className="flex flex-row gap-4 items-center">
              <p>{getCurrentMenuTitle()}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;


