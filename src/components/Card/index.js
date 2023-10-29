import "./index.css";

        
function Card({ cardData }) {
    return (
      <div className="card">
        <img className="card-image" src={cardData.image} alt="character_img" />
        <div className="card-content">

            <h2 className="card-name">{cardData.name}</h2>

            <h3 className="card-species">{cardData.species}</h3>

          <p className="card-location">{cardData.origin.name}</p>
        </div>
      </div>
    );
}

export default Card;
