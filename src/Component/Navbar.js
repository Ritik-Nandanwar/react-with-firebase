import React from "react";

function Navbar() {
  return (
    <>
      <nav className="px-2 py-3 bg-green-300 mb-3">
        <div className="container px-4 flex ">
          <div className="w-full relative flex">
            <a>pink Tailwind Starter Kit</a>
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a>
                  <span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
