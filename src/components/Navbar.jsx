import { ArrowRightFromLine, Bell, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import MotionDiv from "../utils/MotionDiv.jsx";

const Navbar = () => {
  return (
    <div className="fixed  inset-x-0 top-0 z-10  backdrop-blur-md border-b border-primary/20  shadow-lg    ">
      <MotionDiv delay={0.1}>
        <div className="navbar bg-base-100 shadow-sm md:px-10 max-sm:px-2 ">
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <img
                src="/logo.png"
                alt="logo"
                className="md:w-10 md:h-10 w-7 h-7 rounded-lg shadow-lg object-contain"
              />
              <div className="flex flex-col">
                <a className="text-xl max-sm:text-md font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Teamhub
                </a>
                <span className="max-sm:text-sm label">Employee Portal</span>
              </div>
            </div>
          </div>
          <div className="flex-none ">
            <div className="flex gap-1 md:space-x-3">
              <div>
                <label className="swap swap-rotate mt-1">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="dark"
                  />

                  {/* sun icon */}
                  <Sun className="swap-off h-8 w-8 fill-current" />

                  {/* moon icon */}

                  <Moon className="swap-on h-8 w-8 fill-current" />
                </label>
              </div>
              <div className="dropdown dropdown-end max-sm:hidden block">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <Bell />
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 md:w-62 shadow"
                >
                  <div className="card-body">
                    <span className="text-sm label">
                      There a no notifications available{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className=" ">
                  <Link
                    to="/profile"
                    className="flex border-l md:pl-2 border-gray-300 justify-between items-center md:gap-3 max-sm:gap-1 "
                  >
                    <figure className="md:w-12 max-sm:w-10 cursor-pointer">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        className="rounded-full p-1"
                      />
                    </figure>
                    <div>
                      <h1 className=" font-semibold max-sm:text-sm">
                        User Name
                      </h1>
                      <span className="label max-sm:text-xs">Role</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                </ul>
              </div>
              <div className="btn max-sm:btn-sm btn-error btn-outline">
                <Link to="/" className="flex items-center  gap-1 md:gap-3">
                  <ArrowRightFromLine /> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default Navbar;
