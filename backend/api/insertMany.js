import { artistArray } from "../../frontend/src/assets/database/artists.js";
import { songsArray } from "../../frontend/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currentObj) => {
  const newArtistObj = { ...currentObj };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongsArray = songsArray.map((currentObj) => {
  const newSongObj = { ...currentObj };
  delete newSongObj.id;
  return newSongObj;
});

const insertArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);

const insertSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(insertArtists);
console.log(insertSongs);
