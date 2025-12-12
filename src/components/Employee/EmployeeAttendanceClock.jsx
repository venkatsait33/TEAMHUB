import {
  ArrowLeftToLine,
  ArrowRightFromLine,
  Calendar,
  Clock1,
  Clock10,
  Clock5,
  SquareArrowRight,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import MotionDiv from "../../utils/MotionDiv";

const EmployeeAttendanceClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format date (Day, Month, Date, Year)
  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long", // Thursday
    month: "long", // December
    day: "numeric", // 12
    year: "numeric", // 2025
  });

  return (
    <div className="flex flex-col gap-3  p-4">
      <MotionDiv delay={0.1}>
        <div>
          <h1 className=" text-2xl font-semibold lg:text-4xl">
            Clock In / Clock Out
          </h1>
          <span className="label">Track Your Daily Working Hours</span>
        </div>
      </MotionDiv>
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 p-4">
        <MotionDiv delay={0.2}>
          <div className=" flex bg-blue-400/90 flex-col gap-3 border-2 shadow-xl p-4 rounded-lg lg:justify-center lg:items-center  ">
            <div className="flex justify-between items-center">
              <div>
                <p className=" font-semibold text-2xl lg:text-4xl">
                  Current Time & Date
                </p>
                <span className="label">{formattedDate}</span>
              </div>
              <Clock1 />
            </div>

            <div className=" flex justify-center items-center flex-col">
              <div className="text-4xl font-bold ">
                {time.toLocaleTimeString()}
              </div>
              <span>Working Status</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <button className="btn btn-outline  " disabled>
                <ArrowRightFromLine /> Clock In
              </button>
              <button className="btn btn-outline  ">
                <ArrowLeftToLine />
                Clock Out
              </button>
            </div>
          </div>
        </MotionDiv>
        <MotionDiv delay={0.2}>
          <div className=" flex  flex-col  gap-8 rounded-xl">
            <div className=" flex gap-3 flex-col shadow-lg p-4 rounded-lg">
              <p>Today's Summary</p>
              <div className="flex items-center gap-3 shadow-md  rounded-xl bg-base-100 p-2">
                <div className=" btn btn-circle  text-green-600 bg-green-100">
                  <ArrowRightFromLine />
                </div>
                <div>
                  <p>Clock In</p>
                  <span className=" font-semibold text-xl">09:00:00</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shadow-md rounded-xl bg-base-100 p-2">
                <div className=" btn btn-circle  text-red-600 bg-red-100">
                  <ArrowLeftToLine />
                </div>
                <div>
                  <p>Clock Out</p>
                  <span className=" font-semibold text-xl">--:--:--</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shadow-md rounded-xl bg-base-100 p-2">
                <div className=" btn btn-circle  text-blue-600 bg-blue-100">
                  <Clock10 />
                </div>
                <div>
                  <p>Working Hours</p>
                  <span className=" font-semibold text-xl">5h 27m</span>
                </div>
              </div>
              <div className="items-center gap-3 shadow-md bg-orange-100/50 text-orange-300 p-2">
                <span className=" font-bold text-xl">Status</span>
                <p className=" font-normal">
                  Show status according you clicked the clockIn
                </p>
              </div>
            </div>
            <div className=" flex gap-3 flex-col shadow-lg p-4 rounded-lg">
              <h1 className=" text-2xl font-semibold">Working Hours Policy</h1>

              <div className="flex justify-start gap-3 items-center w-full">
                <Calendar className=" text-blue-400" />
                <div>
                  <p className="font-medium">Standard Hours</p>
                  <span>9:00 AM - 6:00 PM (9 hours)</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 items-center w-full">
                <Clock5 className="text-green-400" />
                <div>
                  <p className="font-medium">Grace Period</p>
                  <span>9:00 AM - 9:05 AM</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 items-center w-full">
                <ArrowRightFromLine className="text-red-400" />
                <div>
                  <p className="font-medium">Late Login</p>
                  <span>After 9:05 AM</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 items-center w-full">
                <SquareArrowRight className="text-red-400" />

                <div>
                  <p className="font-medium">Early Logout</p>
                  <span>Before 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default EmployeeAttendanceClock;
