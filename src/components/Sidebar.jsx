import {
  Calendar,
  ClipboardCheck,
  LayoutGrid,
  NotebookTabs,
} from "lucide-react";
import React from "react";

const Sidebar = ({ activeMenu, setActiveMenu, setIsSidebarOpen }) => {
  const menuItems = [
    {
      icon: <LayoutGrid />,
      title: "Dashboard",
    },
    {
      icon: <ClipboardCheck />,
      title: "Clock In/Out",
    },
    {
      icon: <Calendar />,
      title: "Attendance",
    },
    {
      icon: <NotebookTabs />,
      title: "Leaves",
    },
    {
      icon: <ClipboardCheck />,
      title: "Payslips",
    },
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item);

    // 👇 Close sidebar if on small screens
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <div className="h-full bg-base-200 shadow-lg p-3 rounded-lg">
      <div className="flex flex-col gap-4 max-sm:ml-2 max-sm:mt-16 max-sm:mb-2  p-3 rounded-lg ">
        <h2 className="mb-4 text-xl font-bold">Employee</h2>
        <>
          {menuItems.map((item, i) => (
            <button
              key={i}
              className={`p-2 rounded text-left transition  ${
                activeMenu === item?.title
                  ? "bg-blue-500/70 text-base font-semibold   "
                  : "bg-transparent text-base hover:bg-blue-500"
              }`}
              onClick={() => handleMenuClick(item?.title)}
            >
              <div className=" flex items-center justify-between">
                <span className="flex gap-2">
                  {item.icon}

                  {item.title}
                </span>
                <span
                  className={`${
                    activeMenu === item.title
                      ? "badge badge-xs badge-primary indicator indicator-center indicator-item bg-base-100"
                      : ""
                  }`}
                ></span>
              </div>
            </button>
          ))}
        </>
      </div>
    </div>
  );
};

export default Sidebar;
