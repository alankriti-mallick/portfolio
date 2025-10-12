function CertificationCard({ certificate }) {
  return (
    <a href={certificate.link} target="_blank">
      <div className="card">
        <div className="wrapper">
          <img src={certificate.image1} className="cover-image" />
        </div>
        <img src={certificate.image2} className="character" />
      </div>
    </a>
  );
}

export default CertificationCard;
