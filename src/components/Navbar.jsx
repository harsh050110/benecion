import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CSSMathProduct = [
  { name: "LED Video Display Outdoor", path: "/led-video-display-outdoor" },
  { name: "LED Video Display Indoor", path: "/led-video-display-indoor" },
  { name: "LED Video Cube Outdoor", path: "/led-video-cube-outdoor" },
  { name: "LED Video Cube Indoor", path: "/led-video-cube-indoor" },
  { name: "LED Video Display Standee Indoor", path: "/led-video-standee-indoor" },
  { name: "LED Video Display Standee Outdoor", path: "/led-video-standee-outdoor" },
  { name: "Digital Standee", path: "/digital-standee" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const linkClass =
    "block text-blue-700 hover:text-blue-400 transition font-medium";

  return (
    <nav className="w-full bg-[#F4F2F3]  sticky top-0 z-50 shadow-md">
      <div className="max-w-[1470px] w-full h-[80px] mx-auto px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-700">
            Beneicon
          </span>
        </Link>

        <div className=" text-blue-700 hidden lg:flex gap-8 items-center">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-2 text-blue-700 hover:text-blue-400 font-medium"
            >
              Categories
              <span>{categoriesOpen ? "" : ""}</span>
            </button>

            {categoriesOpen && (
              <div className="absolute left-0 top-full mt-3 w-56 bg-[#F4F2F3] rounded-xl shadow-xl">
                <ul className="py-3">
                  {CSSMathProduct.map((category) => (
                    <li key={category.path}>
                      <NavLink
                        to={category.path}
                        onClick={() => setCategoriesOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-2 text-sm transition ${
                            isActive
                              ? "text-blue-700"
                              : "text-blue-600 hover:text-blue-500"
                          }`
                        }
                      >
                        {category.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>

          <NavLink to="/aboutus" className={linkClass}>
            About Us
          </NavLink>

          <NavLink to="/contactus" className={linkClass}>
            Contact Us
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-blue-700 text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F4F2F3]  px-6 pb-6 space-y-4">

          <NavLink
            to="/"
            className="block text-blue-700"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="flex justify-between w-full text-blue-700"
          >
            Categories
            <span>{categoriesOpen ? "−" : "+"}</span>
          </button>

          {categoriesOpen &&
            CSSMathProduct.map((category) => (
              <NavLink
                key={category.path}
                to={category.path}
                className="block text-blue-700 pl-4"
                onClick={() => {
                  setOpen(false);
                  setCategoriesOpen(false);
                }}
              >
                {category.name}
              </NavLink>
            ))}

          <NavLink
            to="/gallery"
            className="block text-blue-700"
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/aboutus"
            className="block text-blue-700"
            onClick={() => setOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/Contact"
            className="block text-blue-700"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
