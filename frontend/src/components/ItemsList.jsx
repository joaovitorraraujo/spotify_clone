import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemsList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const valueItems = isHome ? items : Infinity;
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {isHome ? (
          <Link className="item-list__link" to={path}>
            Mostrar Tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currenteValue, index) => index < valueItems)
          .map((currenteValue, index) => (
            <SingleItem
              {...currenteValue}
              idPath={idPath}
              key={title + index}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsList;
