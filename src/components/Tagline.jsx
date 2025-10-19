import { useState } from "react";

function Tagline() {
  const tags = [
    "⚡ Always curious",
    "☁️ Cloud enthusiast",
    "💻 Code, debug, repeat",
  ];

  const [transform, setTransform] = useState("");

  function handleMouseLeave() {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg)");
  }

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt intensity
    const rotateX = ((y - centerY) / centerY) * 5; // max 5deg tilt
    const rotateY = ((centerX - x) / centerX) * 5;

    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  return (
    <div className="absolute -mt-10 h-20 w-full z-30 flex justify-center text-xs sm:text-sm md:text-base lg:text-xl">
      <div
        className="absolute w-8/10 lg:w-6/10 h-full rounded-3xl bg-[#060c2433] backdrop-blur-sm shadow-[0_0_5px_#ffe5e56d] transition-all duration-500 ease-out hover:shadow-[0_0_10px_#FFE5E5]"
        style={{transform}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-evenly flex-wrap items-center h-full p-4 sm:p-0">
          {tags.map((t) => (
            <p>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tagline;
