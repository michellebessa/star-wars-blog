import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardsStarships = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        {store.starships.results &&
          store.starships.results.map((starship, index) => {
            return (
              <div className="cardscharacters col-sm">
                <img
                  src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{starship.name}</h5>
                  <p className="card-text">
                    <p>Length: {starship.length}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                  </p>
                  <Link to={`/starships/${index}`}>
                    <button className="btnone btn-primary">Learn more!</button>
                  </Link>
                  <button className="btntwo">
                    <i className="fas fa-heart" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
