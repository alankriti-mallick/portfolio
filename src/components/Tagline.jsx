function Tagline() {
    const tags = ['⚡ Always curious','☁️ Cloud enthusiast','💻 Code, debug, repeat']
  return (
    <div className="relative -mt-10 h-20 z-30 flex justify-center text-base">
      <div className="w-6/10 h-full rounded-3xl bg-[#060c24]">
        <div className="flex justify-evenly items-center h-full">
            {tags.map(t => (<p>{t}</p>))}
        </div>
      </div>
    </div>
  );
}

export default Tagline;
