import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starships = (props) => {
  const { store } = useContext(Context);
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    if (store?.starships?.results?.length > 0) {
      const info = store.starships.results[params.theid];
      setData(info);
    }
  }, [store.starships.results]);

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
        <div class="starshipsrow row">
          <div class="col-2">
            Name: <p>{data?.name}</p>
          </div>
          <div class="col-2">
            Length: <p>{data?.length}</p>
          </div>
          <div class="col-2">
            Crew: <p>{data?.crew}</p>
          </div>
          <div class="col-2">
            Passengers: <p>{data?.passengers}</p>
          </div>
          <div class="col-2">Cargo Capacity: {data?.cargo_capacity}</div>
          <div class="col-2">
            Max Athmosphering Speed: {data?.max_atmosphering_speed}
          </div>
        </div>
      </div>
    </div>
  );
};

Starships.propTypes = {
  match: PropTypes.object,
};
