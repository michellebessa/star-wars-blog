import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardsCharacters = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        {store.people.results &&
          store.people.results.map((character, index) => {
            return (
              <div className="cardscharacters col-sm">
                <img
                  src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    <p>Gender:{character.gender}</p>
                    <p>Hair color:{character.hair_color}</p>
                    <p>Eye-color:{character.eye_color}</p>
                  </p>
                  <Link to={`/characters/${index}`}>
                    <button className="btnone btn-primary">Learn more!</button>
                  </Link>
                  <button
                    className="btntwo"
                    onClick={() => actions.setFavorite(character.name)}
                  >
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
