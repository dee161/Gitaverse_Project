import './FeatureCard.css'

const FeatureCard = ({ logo, title, description }) => {
  return (
    <div className="feature-card">
      <div className="image-container-features">
        <img className="feature-card-image" src={logo} alt={title} />
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
