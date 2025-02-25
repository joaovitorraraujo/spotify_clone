import React from "react";
import ItemsList from "./ItemsList";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemsList
          title="Artistas Populares"
          items={6}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Musicas */}
      {type === "songs" || type === undefined ? (
        <ItemsList
          title="Músicas Populares"
          items={24}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
