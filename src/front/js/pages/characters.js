import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
  const { store } = useContext(Context);
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    if (store?.people?.results?.length > 0) {
      const info = store.people.results[params.theid];
      setData(info);
    }
  }, [store.people.results]);

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
        <div class="characterrow row">
          <div class="col-2">
            Name: <p>{data?.name}</p>
          </div>
          <div class="col-2">
            Birth year: <p>{data?.birth_year}</p>
          </div>
          <div class="col-2">
            Gender: <p>{data?.gender}</p>
          </div>
          <div class="col-2">
            Height(m): <p>{data?.height}</p>
          </div>
          <div class="col-2">
            Skin color: <p>{data?.skin_color}</p>
          </div>
          <div class="col-2">
            Eye color: <p>{data?.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Characters.propTypes = {
  match: PropTypes.object,
};
