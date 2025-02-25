import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="logo do Spotify" />
      </Link>
      {/* <input
        className="search"
        type=""
        name="search"
        id=""
        placeholder="O que deseja ouvir?"
      /> */}
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
