import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { navLinks } from '../constants/constants';
// import { logo } from '../assets/images';

const Navbar = () => {
  const [active, setActive] = useState(false);
//   const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        active ? "shadow-lg pt-0 backdrop-blur-md" : "pt-0"
      }  sm:px-4 md:px-0 lg:px-0 fixed top-0 w-full z-30`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* <img src={"src/assets/21bubbles.svg"} alt="logo" className="logo" /> */}

          <h1 className="text-black m-5 text-4xl">21bubbles</h1>
        </Link>

        {/* <ul className="list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer ${
                active ? 'text-white text-lg' : 'text-white text-base'
              } hover:text-lg hover:underline`}
              onClick={() => setActive(true)}
            >
              <Link to={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul> */}

        <div className="flex items-center lg:gap-4 md:gap-4 sm:gap-0 md:px-14 lg:px-14 sm:px-0">
          <Link 
          to="/Contact"
          role="button"
          >
            <button className="text-2xl">Contact</button>
          </Link>
          {/* <Link to="/Services">
            <button className="text-2xl ">Services</button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
