import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialFacebook,
} from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";
function HeroLeft() {
  return (
    <div className="flex flex-col justify-center w-auto lg:w-1/2 h-full px-8">
      <h1 className="text-4xl sm:text-5xl py-6">
        I'm
        <br />
        <span className="font-bold hover:text-7xl transition-all duration-500">
          Alankriti Mallick
        </span>
      </h1>
      <div className="h-1 w-2/3 sm:w-1/3 bg-[#FFE5E5] rounded-xl"></div>
      <p className="text-sm md:text-base w-auto sm:w-2/3 py-6">
        I turn complex systems into simple solutions and ideas into interactive
        web experiences.
      </p>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="flex flex-col justify-evenly h-2/3 w-auto lg:w-1/2 pl-8 pr-16 sm:mt-8">
      <div className="flex flex-col justify-evenly h-3/4 py-6">
        <h2 className="text-2xl font-semibold ">About me...</h2>
        <p className="text-sm sm:text-base font-light text-[#FFE5E5]">
          I’m a developer who thrives at the intersection of cloud integration
          and full-stack development. One day I’m building serverless pipelines
          with Azure Functions, the next I’m crafting sleek React interfaces
          that users enjoy.
        </p>
        <p className="text-sm sm:text-base font-light text-[#FFE5E5]">
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
    <div className="flex justify-start lg:justify-center w-2/3 sm:w-auto">
      {socials.map((s) => (
        <div className="px-4 sm:p-8 text-base sm:text-2xl hover:-translate-y-5 hover:cursor-pointer ease-in-out duration-500 hover:drop-shadow-[0_0_10px_#FFE5E5]">
          <a href={s.link} target="_blank">
            {s.component}
          </a>
        </div>
      ))}
    </div>
  );
}

function ImageLarge() {
  return (
    <div className="invisible lg:visible">
      <div className="absolute w-80 h-80 xl:w-120 xl:h-120 left-95 bottom-0 bg-[#070F2B] rounded-full opacity-20 blur-sm z-0"></div>
      <div className="absolute left-100 xl:left-110 bottom-0 h-8/10 xl:h-9/10 z-20">
        <img
          src="./alankriti_2.png"
          alt="Overlay"
          className="max-h-full filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        />
      </div>
    </div>
  );
}

function ImageSmall() {
  return (
    <div className="relative flex justify-center pb-60 pl:20 md:pb-80 md:pl-10 visible lg:invisible">
      <div className="absolute w-80 h-80 md:w-110 md:h-110 bg-[#070F2B] rounded-full opacity-20 blur-sm z-0"></div>
      <div className="absolute h-80 md:h-100 z-20">
        <img
          src="./alankriti_2.png"
          alt="Overlay"
          className="max-h-full filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative bg-[#1B1A55] h-auto lg:h-[70vh] flex justify-center overflow-hidden py-20 lg:py-0">
      <div className="flex flex-col lg:flex-row justify-between h-full lg:pt-20">
        <HeroLeft />
        <HeroRight />
        <ImageSmall />
      </div>
      <ImageLarge />
    </section>
  );
}

export default Hero;
