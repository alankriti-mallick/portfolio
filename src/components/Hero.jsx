import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialFacebook,
} from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";
function HeroLeft() {
  return (
    <div className="flex flex-col justify-center w-1/2 h-full px-8">
      <h1 className="text-5xl py-6">
        I'm
        <br />
        <span className="font-bold hover:text-7xl transition-all duration-500">Alankriti Mallick</span>
      </h1>
      <div className="h-1 w-1/3 bg-[#FFE5E5] rounded-xl"></div>
      <p className="w-2/3 py-6">
        I turn complex systems into simple solutions and ideas into interactive
        web experiences.
      </p>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="flex flex-col justify-evenly h-2/3 w-1/2 pl-8 pr-16 mt-8">
      <div className="flex flex-col justify-evenly h-3/4 py-6">
        <h2 className="text-2xl font-semibold ">About me...</h2>
        <p className="font-light text-[#FFE5E5]">
          I’m a developer who thrives at the intersection of cloud integration
          and full-stack development. One day I’m building serverless pipelines
          with Azure Functions, the next I’m crafting sleek React interfaces
          that users enjoy.
        </p>
        <p className="font-light text-[#FFE5E5]">
          Outside of coding, you’ll often find me reading books, drawing, or
          learning something new—whether it’s a tech concept or a creative
          skill.
        </p>
      </div>
      <Socials />
    </div>
  );
}

function Socials() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/alankriti-mallick-b3919a191/",
      component: <SlSocialLinkedin />,
    },
    {
      link: "https://github.com/alankriti-mallick",
      component: <SlSocialGithub />,
    },
    {
      link: "mailto:alankriti1108@gmail.com",
      component: <BiLogoGmail />,
    },
    {
      link: "https://www.facebook.com/alankriti.mallick/",
      component: <SlSocialFacebook />,
    },
  ];

  return (
    <div className="flex justify-center">
      {socials.map((s) => (
        <div className="p-8 text-2xl hover:-translate-y-5 hover:cursor-pointer ease-in-out duration-500 hover:drop-shadow-[0_0_10px_#FFE5E5]">
          <a href={s.link} target="_blank">
            {s.component}
          </a>
        </div>
      ))}
    </div>
  );
}

function Image() {
  return (
    <>
      <div className="absolute w-120 h-120 left-95 bottom-0 bg-[#070F2B] rounded-full opacity-20 blur-sm z-0"></div>
      <div className="absolute left-110 bottom-0 h-9/10 z-20">
        <img
          src="./alankriti_2.png"
          alt="Overlay"
          className="max-h-full filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        />
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="relative bg-[#1B1A55] h-[70vh] flex justify-center overflow-hidden">
      <div className="flex justify-between h-full">
        <HeroLeft />
        <HeroRight />
      </div>
      <Image />
    </div>
  );
}

export default Hero;
