import React from "react";
import SingleCard from "./SingleCard";


const CardList = ({ title, itemsArray, idPath }) => {


  return (
    <div className="card-list">
      <div className="card-list__container">
        {itemsArray.map((currObj, index) => (
          <SingleCard {...currObj} idPath={idPath} key={`${title}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
