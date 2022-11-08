import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);

  useEffect(() => {}, [store]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
            class="logo"
            alt=""
          ></img>
        </Link>
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites<span className="favoritescircle">{" "}{store.favorites.length} </span>       
          </button>
          <ul class="dropdown-menu">
            {store.favorites &&
              store.favorites.map((itemname) => {
                return (
                  <li>
                    <a class="dropdown-item" href="#">
                      {itemname}
                      <button onClick={() => actions.deleteFavorite(itemname) }>
                        <i class="trash fas fa-trash"></i>
                      </button>
                    </a>
                  </li>
                );
              })}
            {store.favorites.length == 0 && <p className="none">None selected</p>}
          </ul>
        </div>
      </div>
    </nav>
  );
};
