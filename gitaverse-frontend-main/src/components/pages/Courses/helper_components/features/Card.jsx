import { cardData } from "./cardData";
import FeatureCard from "./FeatureCard";
import "./Card.css";

const Card = () => {
  return (
    <div className="features">
      <div className="head-features">
        <h2 className="heading-features">Main Features</h2>
      </div>

      <div className="card-container-features">
        {cardData.map((card, index) => (
          <FeatureCard
            key={index}
            logo={card.logo}
            title={card.title}
            description={card.detail}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
