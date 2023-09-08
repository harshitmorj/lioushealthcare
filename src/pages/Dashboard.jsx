import React from "react";
import StatisticWidget from "../components/Widget/Statistic1.jsx";
import StatisticWidget2 from "../components/Widget/Statistic2.jsx";
import StatisticWidget3 from "../components/Widget/Statistic3.jsx";
import AchievementWidget from "../components/Widget/Achievment.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationWidget from "../components/Widget/Notifications.jsx";
import RecentWidget from "../components/Widget/Recents.jsx";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const data = [
    {
      title: "Requests",
      amount: "21K",
      percentage: -11.01,
      color: "bg-sky-100",
    },
    {
      title: "Active Units",
      amount: "367K",
      percentage: 190.01,
      color: "bg-slate-100",
    },
    {
      title: "New Units",
      amount: "1156",
      percentage: 99.01,
      color: "bg-sky-100",
    },
    {
      title: "Total Health Checkups",
      amount: "239K",
      percentage: 100.01,
      color: "bg-slate-100",
    },
  ];

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        {/* Upper Pane with Dashboard Header */}
        <div className="px-2 pb-3 mx-auto border">
          <DashboardHeader toggle={sidebarToggle} />
        </div>

        {/* Lower Pane with Widgets */}
        <div className="flex px-2 mx-auto mainCard flex-col-reverse md:flex-row">
          {/* Left Pane */}
          <div className="w-full md:w-4/5">
            <h1 className="text-slate-500 pb-3 text-base md:text-lg">
              This Week <FontAwesomeIcon icon={faArrowDownShortWide} />
            </h1>

            <div className="flex flex-col md:flex-row gap-x-6 no-scrollbar overflow-auto">
              {data?.map((data, index) => (
                <ScrolledCard key={index} data={data} />
              ))}
            </div>

            {/* <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div> */}
            <div className="px-2 mx-auto mainCard">
              <div className="w-full overflow-hidden text-slate-700 md:grid gap-4 grid md:grid-cols-6 flex">
                <StatisticWidget className="col-span-4 bg-gray-50" />
                <AchievementWidget className="" />
              </div>
            </div>
            <div className="px-2 mx-auto mainCard overflow-auto">
              <div className="w-full overflow-auto text-slate-700 md:grid gap-4 grid md:grid-cols-6 flex">
                <StatisticWidget2 className="col-span-3 bg-gray-50 overflow-auto" />
                <StatisticWidget3 className="col-span-3 bg-gray-50 overflow-auto" />
              </div>
            </div>

            {/* Footer */}
            <div className="flex">
              <div className="w-full py-4 text-left text-gray-500">
                &copy; {new Date().getFullYear()} LIOUS HealthCare Pvt. Ltd.
              </div>
              <div className="w-full py-4 px-2 text-right text-gray-500">
                <a href="/" className="pr-5">
                  {" "}
                  About{" "}
                </a>
                <a href="/" className="pr-5">
                  {" "}
                  Support{" "}
                </a>
                <a href="/"> Contact Us </a>
              </div>
            </div>
          </div>
          {/* Right Pane */}
          <div className="w-full md:w-1/5">
            {/* Notification Widget */}
            <NotificationWidget />
            <RecentWidget />
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
