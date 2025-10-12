import CertificationCard from "./CertificationCard";

function Certifications() {
  const certificates = [
    {
      image1: "./az-900.png",
      image2: "./az-900-2.png",
      link: "https://learn.microsoft.com/en-us/users/alankritimallick-5411/credentials/14e63f56abd244d3",
    },
    {
      image1: "./az-900.png",
      image2: "./az-204.png",
      link: "https://learn.microsoft.com/en-us/users/alankritimallick-4331/credentials/b615ddfb764bc685",
    },
    {
      image1: "./gcloud.png",
      image2: "./az-204.png",
      link: "https://learn.microsoft.com/en-us/users/alankritimallick-5411/credentials/14e63f56abd244d3",
    },
    {
      image1: "./az-900.png",
      image2: "./az-204.png",
      link: "https://learn.microsoft.com/en-us/users/alankritimallick-5411/credentials/14e63f56abd244d3",
    },
  ];
  return (
    <div className="certification-container h-100 bg-pink-200">
      {certificates.map((c) => (
        <CertificationCard certificate={c} />
      ))}
    </div>
  );
}

export default Certifications;
