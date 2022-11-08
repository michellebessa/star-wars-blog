import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardsPlanets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        {store.planets.results &&
          store.planets.results.map((planet, index) => {
            return (
              <div className="cardscharacters col-sm">
                <img
                  src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">
                    <p>Population: {planet.population}</p>
                    <p>Terrain: {planet.terrain}</p>
                  </p>
                  <Link to={`/planets/${index}`}>
                    <button className="btnone btn-primary">Learn more!</button>
                  </Link>
                  <button className="btntwo">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );}