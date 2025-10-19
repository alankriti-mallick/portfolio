function Footer() {
  return (
    <footer className="h-auto bg-light-100 dark:bg-dark-100 m-3 rounded-2xl flex flex-wrap justify-center items-center text-light-300 dark:text-dark-300 px-4 py-3 shadow-[0_5px_10px_#756AB6] dark:shadow-[0_5px_10px_#070F2B]">
      <p className="p-1 text-sm sm:text-base text-center">
        Made with ❤️ using React & Tailwind
      </p>
      <p className="p-1 text-sm sm:text-base text-center invisible lg:visible">|</p>
      <p className="p-1 text-sm sm:text-base text-center">
        Powered by ☁️Azure,⚡MERN, and a little bit of imagination.
      </p>
    </footer>
  );
}

export default Footer;
