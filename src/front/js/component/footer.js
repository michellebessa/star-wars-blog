import React, { component, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <nav class="navbar navbar-light bg-light mb-5">
      <div class="container-fluid">
        <a class="navbar-brand mx-auto" href="#">
          Copyright © My Blog 2022
        </a>
      </div>
      </nav>
    </footer>
  );
};
