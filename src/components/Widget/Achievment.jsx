import React from "react";

function Achievement() {
  // Sample data for the top 7 organizations
  const topOrganizations = [
    { name: "Organization 1", percentage: 85 },
    { name: "Organization 2", percentage: 75 },
    { name: "Organization 3", percentage: 70 },
    { name: "Organization 4", percentage: 65 },
    { name: "Organization 5", percentage: 60 },
    { name: "Organization 6", percentage: 55 },
    { name: "Organization 7", percentage: 50 },
  ];

  return (
    <div className="relative col-span-2 px-6 py-4 bg-gray-50 overflow-auto">
      <div className="text-slate-800 text-center font-semibold">
        <h1 className="text-medium font-semibold truncate text-left">Top 7 Organizations (Units)</h1>
      </div>

      <div className=" w-full">
        {topOrganizations.map((org, index) => (
          <div key={index} className="mb-1 overflow-auto">
            <div className="flex gap-4 items-center">
              <div className="text-sm font-semibold">
                <span className="text-gray-500 truncate">{org.name}</span>
              </div>
            </div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: `${org.percentage}%` }}
                ></div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
