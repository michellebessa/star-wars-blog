import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store } = useContext(Context);
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    if (store?.planets?.results?.length > 0) {
      const info = store.planets.results[params.theid];
      setData(info);
    }
  }, [store.planets.results]);

  return (
    <div className="info">
      <h1 className="name">{data?.name}</h1>
      <img
        src="https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg"
        className="img-thumbnail"
        alt="..."
      ></img>
      <p className="description">
        The story of the original trilogy focuses on Luke Skywalker's quest to
        become a Jedi, his struggle with the evil Imperial agent Darth Vader,
        and the struggle of the Rebel Alliance to free the galaxy from the
        clutches of the Galactic Empire. One of the central themes in Star Wars
        is the idea that one person in the right place at the right time doing
        the right thing can bring down an entire system. The explosion of the
        Death Star is a collective undertaking, but ultimately comes down to
        just one person—Luke Skywalker—hitting the bullseye.{" "}
      </p>
      <span className="line"></span>
      <div class="container">
        <div class="planetsrow row">
          <div class="col-2">
            Name: <p>{data?.name}</p>
          </div>
          <div class="col-2">
            Climate: <p>{data?.climate}</p>
          </div>
          <div class="col-2">
            Population: <p>{data?.population}</p>
          </div>
          <div class="col-2">
            Orbital Period: <p>{data?.orbital_period}</p>
          </div>
          <div class="col-2">
            Rotation Period: <p>{data?.rotation_period}</p>
          </div>
          <div class="col-2">
            Diameter: <p>{data?.diameter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.object,
};
