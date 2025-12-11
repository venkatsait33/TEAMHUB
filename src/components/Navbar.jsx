import { Bell, Moon, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed  inset-x-0 top-0 z-10  backdrop-blur-md border-b border-primary/20  shadow-lg    ">
      <div className="navbar bg-base-100 shadow-sm px-10 ">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <img
              src="/src/assets/teamhub-logo-vfl_EB37.png"
              alt="logo"
              className="w-10 h-10 rounded-lg shadow-lg object-contain"
            />
            <div className="flex flex-col">
              <a className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Teamhub
              </a>
              <span>Employee Portal</span>
            </div>
          </div>
        </div>
        <div className="flex-none ">
          <div className="flex space-x-3">
            <div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dark"
                />

                {/* sun icon */}
                <Sun size={20} className="swap-off h-10 w-10 fill-current" />

                {/* moon icon */}

                <Moon size={20} className="swap-on h-10 w-10 fill-current" />
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <Bell />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
