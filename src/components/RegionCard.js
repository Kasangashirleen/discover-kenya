import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegionCard.css"

function RegionCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/region/${props.id}`);
  };

  return (
    <div className="region" onClick={handleClick}>
      <h2>{props.region}</h2>
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default RegionCard;
