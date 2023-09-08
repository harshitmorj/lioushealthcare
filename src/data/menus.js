import {
  faBuilding,
  faDashboard,
  faUser,
  faHospital,
  faBook
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faDashboard,
  },
  {
    label: "Organizational Management",
    path: "/blank",
    icon: faBuilding,
  },
  {
    label: "Registration Management",
    path: "/profile",
    icon: faUser,
  },

  {
    label: "Health Checkups Management",
    path: "/blank",
    icon: faHospital,
  },
  {
    label: "POC Management",
    path: "/profile",
    icon: faBook,
  },
];

export default initMenu