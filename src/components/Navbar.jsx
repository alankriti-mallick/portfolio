import { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";

function Navbar() {
  const menuItems = ["Home", "Skills", "Certifications"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-light-400 dark:bg-dark-400 text-light-text dark:text-dark-text w-full fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <h2 className="text-lg sm:text-xl font-semibold">Alankriti</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((i) => (
            <li
              key={i}
              className="hover:text-light-text/70 dark:hover:text-dark-text/80 transition-colors duration-300"
            >
              <a
                href={`#${i.toLowerCase()}`}
              >
                {i}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Icon */}
        <div className="hidden md:block text-2xl hover:drop-shadow-[0_0_10px_#070F2B] dark:hover:drop-shadow-[0_0_10px_#FFE5E5] transition-all duration-500">
          <a
            href="https://docs.google.com/document/d/1xNBDaKUYEzP5sTmyMSxGCIonp49C69YF_2zKLh14g2A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaClipboardListSolid />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden bg-light-400 dark:bg-dark-400 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {menuItems.map((i) => (
            <a
              key={i}
              href={`#${i.toLowerCase()}`}
              className="hover:text-light-text/70 dark:hover:text-dark-text/80 transition-colors duration-300"
              onClick={()=>{setOpen(!open)}}
            >
              {i}
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1xNBDaKUYEzP5sTmyMSxGCIonp49C69YF_2zKLh14g2A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:drop-shadow-[0_0_10px_#070F2B] dark:hover:drop-shadow-[0_0_10px_#FFE5E5] transition-all duration-500"
          >
            <LiaClipboardListSolid />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
