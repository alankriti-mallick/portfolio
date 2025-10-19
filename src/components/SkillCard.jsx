function SkillCard({ name, icon }) {
  return (
    <div className="group w-full sm:w-30 md:w-50 p-4 m-3 h-7/10 rounded-3xl text-[#FFE5E5] bg-[#060c2433] backdrop-blur-xs text-3xl sm:text-4xl flex flex-col justify-center items-center hover:shadow-[0_0_10px_#FFE5E5] transition-all duration-500">
      <div className="group-hover:drop-shadow-[0_0_5px_#FFE5E5] flex flex-col justify-evenly items-center duration-500">
        {icon}
        <p className="text-lg mt-2 sm:text-xl md:text-2xl group-hover:text-2xl sm:group-hover:text-3xl transition-all duration-500 text-center">
          {name}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
