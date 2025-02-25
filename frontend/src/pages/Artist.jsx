import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
artistArray;

const Artist = () => {
  // artist
  const { id } = useParams();
  const artistObj = artistArray.filter(
    (currenteObj) => currenteObj._id === id
  )[0];

  // songs
  const songsArrayFromArtist = songsArray.filter(
    (currenteObj) => currenteObj.artist === artistObj.name
  );

  const radomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const radomIdFromArtist = songsArrayFromArtist[radomIndex];

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${radomIdFromArtist._id}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist "
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
