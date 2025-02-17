import React from "react";
import { cardsArray } from "../assets/card/cards";
import CardList from "./CardList";

const Main = ({ type, banner }) => {
  return (
    <div className="main">
      {/* Card List Overview */}
      {type === "overview" || type === undefined ? (
        <CardList
          title="Overview"
          items={1}
          itemsArray={[cardsArray[0]]}
          idPath="/overview"
        />
      ) : (
        <></>
      )}
      {/* Card List Artists */}
      {type === "artists" || type === undefined ? (
        <CardList
          title="Artistas"
          items={1}
          itemsArray={[cardsArray[1]]}
          idPath="/artists"
        />
      ) : (
        <></>
      )}
      {/* Card List Songs */}
      {type === "songs" || type === undefined ? (
        <CardList
          title="Músicas"
          items={1}
          itemsArray={[cardsArray[2]]}
          idPath="/songs"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
