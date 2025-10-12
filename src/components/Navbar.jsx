import { LiaClipboardListSolid } from "react-icons/lia";

function Navbar() {
  const menuItems = ["Home", "Skills", "Projects", "Certifications"];
  return (
    <div className="flex justify-evenly items-center bg-[#070F2B] max-h-16">
      <h2 className="p-4">Alankriti</h2>
      <ul className="flex justify-evenly">
        {menuItems.map((i) => (
          <li className="p-4" key={i}>
            <a href={`#${i.toLowerCase()}`}>{i}</a>
          </li>
        ))}
      </ul><div className="h-full p-4 text-3xl text-[#FFE5E5] hover:drop-shadow-[0_0_10px_#FFE5E5] ease-in-out duration-500">
          <a
            href="https://docs.google.com/document/d/1xNBDaKUYEzP5sTmyMSxGCIonp49C69YF_2zKLh14g2A/edit?usp=sharing"
            target="_blank"
          >
            <LiaClipboardListSolid />
          </a>
        </div>
    </div>
  );
}

export default Navbar;
