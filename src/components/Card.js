import React from "react";
import "../styles/Card.css";
import pinIcon from "../images/location.png";

const Card = (props) => {
  const { image, imageName, rName, rlocation } = props;
  return (
    <div className="card-wrapper">
      <div className="card-image-containter">
        <img src={image} alt={imageName} />
      </div>
      <div className="card-info-containter">
        <h3>{rName}</h3>
        <h4>
          <img src={pinIcon} alt="location-pin" />
          {rlocation}
        </h4>
        <h5>Cusine type | 100 Reviews </h5>
        <h5>22 -40 mins | $1.99 Delivery</h5>
      </div>
    </div>
  );
};

export default Card;
