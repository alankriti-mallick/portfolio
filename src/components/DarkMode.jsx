import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    //   document.getElementsByClassName('skills').classList.add('skills-dark');
    //   document.getElementsByClassName('skills').classList.remove('skills-light');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    //   document.getElementsByClassName('skills').classList.remove('skills-dark');
    //   document.getElementsByClassName('skills').classList.add('skills-light');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);
  }, []);

  return (
    <button
      className="fixed right-4 bottom-4 p-5 rounded-full hover:cursor-pointer bg-light-200 text-light-text dark:bg-dark-200 dark:text-dark-text"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
}
export default DarkMode;
