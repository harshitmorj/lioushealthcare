import React from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrolledCard({ data, ...props }) {
  const isPositive = data.percentage >= 0;
  const arrowIcon = isPositive ? faArrowUp : faArrowDown;

  return (
    <div className={`${data.color} text-black px-4 py-10 rounded-lg`}>
      <h1 className="pb-3 text-xl font-bold pl-5 ">
        <b>{data.title}</b>
      </h1>

      <div className="flex flex-row justify-between items-center pl-6">
        <div className={`text-medium text-3xl flex pr-20`}>{data.amount}</div>
        <div className="pr-6 flex">
          {data.percentage}%
          <div className="pl-3">
            <FontAwesomeIcon icon={arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrolledCard;
