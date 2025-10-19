import SkillCard from "./SkillCard";
import { VscAzure } from "react-icons/vsc";
import { SiDotnet } from "react-icons/si";
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
    { name: "DotNet", icon: <SiDotnet /> },
    { name: "Java", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Terraform", icon: <TbBrandTerraform /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TailwindCSS", icon: <TbBrandTailwind /> },
  ];

  return (
    <section id="skills" className="skills h-100 md:h-120 flex flex-col justify-center items-center bg-cover bg-center px-0">
      <div className="mt-8 h-full w-full max-w-screen-xl flex flex-col justify-center">
        <Splide
          options={{
            type: "loop", // Loop slides
            perPage: 3, // Show 3 slides per view on desktop
            perMove: 1,
            breakpoints: {
              // Responsive slides per view
              1024: { perPage: 4 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: true,
              rewind: true,
              speed: 1,
            },
            arrows: false,
            pagination: false,
            gap: "1.5rem",
            fixedWidth: "200px", // Fixed width for each slide
            fixedHeight:"300px"
          }}
          extensions={{ AutoScroll }}
        >
          {skills.map((s, index) => (
            <SplideSlide key={index}>
              <SkillCard name={s.name} icon={s.icon} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Skills;
