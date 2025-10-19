import CertificationCard from "./CertificationCard";
import Footer from "./Footer";

function Certifications() {
  const certificates = [
    {
      image: "./az-900.png",
      title: "Azure Fundamentals",
      link: "https://learn.microsoft.com/en-us/users/alankritimallick-5411/credentials/14e63f56abd244d3",
    },
    {
      image: "./az-204.png",
      title: "Azure Developer Associate",
      link: "https://learn.microsoft.com/en-us/users/alankritimallick-4331/credentials/b615ddfb764bc685",
    },
    {
      image: "./gail.png",
      title: "Generative AI Leader Certification",
      link: "https://www.credly.com/badges/9d01d493-fd00-48b5-92c4-986cb4c2d58f/public_url",
    },
    {
      image: "./gh-900.png",
      title: "GitHub Foundations",
      link: "https://learn.microsoft.com/en-in/users/alankritimallick-4331/credentials/af340d82ff5b8cb7",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[#070F2B] to-[#1B1A55] pb-0.5">
    <section id="certifications" className="certification-container flex flex-wrap justify-center gap-12 p-12 pt-30 ">
      {certificates.map((c) => (
        <CertificationCard certificate={c} />
      ))}
    </section>
    <Footer />
    </div>
  );
}

export default Certifications;
