import SkillCard from "./SkillCard";
import { VscAzure } from "react-icons/vsc";
import {
  TbBrandCSharp,
  TbBrandTerraform,
  TbBrandTailwind,
} from "react-icons/tb";
import { FaJava, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

function Skills() {
  const skills = [
    { name: "Azure", icon: <VscAzure /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "Java", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Terraform", icon: <TbBrandTerraform /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TailwindCSS", icon: <TbBrandTailwind /> },
  ];

  return (
    <div className="skills h-120 flex flex-col justify-center items-center bg-cover bg-center">
      <div className="mt-8 h-full max-w-screen-xl flex flex-col justify-center">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: true,
              rewind: true, // Rewind to start when the end is reached
              speed: 1, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "200px", // Fixed width for each slide
            height:"300px",
            gap: "20px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          {skills.map((s) => (
            <SplideSlide>
              <SkillCard name={s.name} icon={s.icon} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Skills;
