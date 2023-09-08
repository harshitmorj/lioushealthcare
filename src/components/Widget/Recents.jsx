import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons"; // Import the bell icon

function RecentCompaniesWidget() {
  // Your recent companies logic goes here
  const recentCompanies = [
    {
      id: 1,
      companyName: "Company A",
      link: "/companyA",
    },
    {
      id: 2,
      companyName: "Company B",
      link: "/companyB",
    },
    // Add more recent companies as needed
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2 px-3">Recents</h2>
      {recentCompanies.map((company) => (
        <div key={company.id} className="p-4 truncate ">
          <div className="flex justify-between">
            <a
              href={company.link}
              className="text-black font-semibold"
            >
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />{" "}
              {company.companyName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentCompaniesWidget;
