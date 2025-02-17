import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ title, description, banner, idPath }) => {
  return (
    <Link to={idPath} className="single-card">
      <div
        className="single-card__div-image"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      ></div>

      <div className="single-card__texts">
        <div className="single-card__title">
          <p>{title}</p>
        </div>
        <div className="single-card__description">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
