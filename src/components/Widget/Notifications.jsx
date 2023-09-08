import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Import the bell icon
import React from "react";

function NotificationWidget() {
  // Your notification logic goes here
  const notifications = [
    {
      id: 1,
      message: "Notification 1",
      time: "2 minutes ago",
      link: "/notification1",
    },
    {
      id: 2,
      message: "Notification 2",
      time: "5 minutes ago",
      link: "/notification2",
    },
    // Add more notifications as needed
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2 px-3">Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="p-4 ">
          <div className="flex justify-between">
            <a
              href={notification.link}
              className="text-black font-semibold hover:underline flex items-center"
            >
              <FontAwesomeIcon icon={faBell} className="mr-2" /> {/* Correct usage of FontAwesomeIcon */}
              {notification.message}
            </a>
          </div>
          <p className="text-gray-500 text-sm">{notification.time}</p>
        </div>
      ))}
    </div>
  );
}

export default NotificationWidget;
