import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardsCharacters } from "../component/cards-characters";
import { CardsPlanets } from "../component/cards-planets";
import { CardsStarships } from "../component/cards-starships";

export const Home = () => {
  return (
    <div>
      <h1 className="charactertitle">Characters</h1>
      <CardsCharacters />
      <h1>Planets</h1>
      <CardsPlanets />
      <h1>Starships</h1>
      <CardsStarships />
    </div>
  );
};
