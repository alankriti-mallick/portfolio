function CertificationCard({ certificate }) {
  return (
    <div className="relative h-50 w-60 rounded-t-2xl group">
      <div className="absolute -mt-5 w-full h-10 rounded-full flex justify-center items-center z-30">
        <img src={certificate.image} alt="" className="h-20 group-hover:h-25 group-hover:drop-shadow-[0_0_10px_#FFE5E5] transition-all duration-500"/>
      </div>
      <div className="relative w-full h-6/10 rounded-t-2xl bg-light-300 dark:bg-dark-300 flex flex-col justify-center items-center z-20">
        <span className="mt-12 p-6 text-lg text-center">{certificate.title}</span>
      </div>
      <div className="clip-arrow absolute rounded-b-2xl w-full h-1/2 -translate-y-6/10 bg-[#070f2b54] text-light-text dark:text-dark-text backdrop-blur-2xl drop-shadow-2xl z-10 group-hover:translate-y-0.5 group-hover:z-0 transition-all duration-500">

        <div className="w-full h-8/10 flex justify-center items-center"><a href={certificate.link} target="_blank" className="bg-light-100 dark:bg-light-300 p-2 text-sm rounded-2xl hover:shadow-[0_0_5px_#FFE5E5] transition-all duration-500">View Credentials</a></div>
      </div>
    </div>
  );
}

export default CertificationCard;