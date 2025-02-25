import React from "react";
import { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songArray }) => {
  const [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {songArray
        .filter((currenteObj, index) => index < items)
        .map((currenteObj, index) => (
          <SongItem {...currenteObj} index={index} key={index} />
        ))}

      {items <= 5 ? (
        <p
          className="song-list__see-more"
          onClick={() => {
            setItems(items + 5);
          }}
        >
          Ver mais
        </p>
      ) : (
        <p
          className="song-list__see-more"
          onClick={() => {
            setItems(items - 5);
          }}
        >
          ver menos
        </p>
      )}
    </div>
  );
};

export default SongList;
