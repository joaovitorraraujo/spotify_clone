import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const songObjFromId = songsArray.filter(
    (currenteObj, index) => currenteObj._id === id
  )[0];

  const artistObjFromId = artistArray.filter(
    (currenteObj, index) => currenteObj.name === songObjFromId.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currenteObj) => currenteObj.artist === artistObjFromId.name
  );

  const radomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const radomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const radomIdFromArtist = songsArrayFromArtist[radomIndex]._id;
  const radomIdFromArtist2 = songsArrayFromArtist[radomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={songObjFromId.image}
            alt={`Imagem da musica ${songObjFromId.name}`}
          />
        </div>
      </div>
      <div className="song__bar">
        <Link
          to={`/artist/${artistObjFromId._id}`}
          className="song__artist-image"
        >
          <img
            width={75}
            height={75}
            src={artistObjFromId.image}
            alt={`Imagem do ${artistObjFromId.name}`}
          />
        </Link>

        <Player
          duration={songObjFromId.duration}
          musicId={radomIdFromArtist}
          musicId2={radomIdFromArtist2}
          audio={songObjFromId.audio}
        />

        <div>
          <p className="song__name">{songObjFromId.name}</p>
          <p>{songObjFromId.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
