import React from "react";
import { del } from "./counterSlice";

import { useSelector, useDispatch } from "react-redux";

export default function Todoprint() {
  const state = useSelector((state) => state.counterSlice);
  const dispa = useDispatch();
  let dateCheck = "";

  let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    dateCheck = year + month + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  return (
    <>
      <div className="task">
        {state.value.map((item, index) => {
          return (
            <div>
              <span>
                <pre>
                  <li className="list">
                    TASK:{item.n} TASK_DISC:{item.disc} TASK_DATE:{item.dt}
                  </li>
                </pre>
                <div>
                  {item.dt.replace(/-/g, "") === dateCheck ? (
                    <p>Due Date is Today</p>
                  ) : item.dt.replace(/-/g, "") <= dateCheck ? (
                    <p>Due Date is Passed</p>
                  ) : null}
                </div>
                {/* <div>
                  {item.dt.replace(/-/g, "") === dateCheck ? (
                    <p>due date is today</p>
                  ) : item.dt.replace(/-/g, "") <= dateCheck ? (
                    <p>due date :{item.dt}</p>
                  ) : (
                    <p>due date :{item.dt}</p>
                  )}
                </div> */}
              </span>
              <button
                className="buton"
                onClick={() => {
                  dispa(del({ in: index }));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
