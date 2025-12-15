import { createContext, useContext, useEffect, useState } from "react";

const EmployeeTimeContext = createContext(null);

export const EmployeeTimeProvider = ({ children }) => {
  const STORAGE_KEYS = {
    CLOCK_IN: "clockInTime",
    CLOCK_OUT: "clockOutTime",
  };

  const [time, setTime] = useState(new Date());
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [workingTime, setWorkingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Restore from localStorage ---------------- */
  useEffect(() => {
    const storedClockIn = localStorage.getItem(STORAGE_KEYS.CLOCK_IN);
    const storedClockOut = localStorage.getItem(STORAGE_KEYS.CLOCK_OUT);

    if (storedClockIn) {
      setClockInTime(new Date(Number(storedClockIn)));
    }

    if (storedClockOut) {
      setClockOutTime(new Date(Number(storedClockOut)));
    }
  }, []);

  /* ---------------- Working Time Calculator ---------------- */
  useEffect(() => {
    if (!clockInTime) return;

    let timer;

    if (clockInTime && !clockOutTime) {
      timer = setInterval(() => {
        setWorkingTime(Date.now() - clockInTime.getTime());
      }, 1000);
    }

    if (clockInTime && clockOutTime) {
      setWorkingTime(clockOutTime.getTime() - clockInTime.getTime());
    }

    return () => clearInterval(timer);
  }, [clockInTime, clockOutTime]);

  /* ---------------- Handlers ---------------- */
  const handleClockIn = () => {
    const now = new Date();
    setClockInTime(now);
    setClockOutTime(null);
    setWorkingTime(0);

    localStorage.setItem(STORAGE_KEYS.CLOCK_IN, now.getTime());
    localStorage.removeItem(STORAGE_KEYS.CLOCK_OUT);
  };

  const handleClockOut = () => {
    const now = new Date();
    setClockOutTime(now);

    localStorage.setItem(STORAGE_KEYS.CLOCK_OUT, now.getTime());
  };

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formatTime = (date) =>
    date ? date.toLocaleTimeString("en-US") : "--:--:--";

  return (
    <EmployeeTimeContext.Provider
      value={{
        clockInTime,
        clockOutTime,
        workingTime,
        handleClockIn,
        handleClockOut,
        formattedDate,
        time,
        formatTime,
      }}
    >
      {children}
    </EmployeeTimeContext.Provider>
  );
};

export const useEmployeeTime = () => useContext(EmployeeTimeContext);
