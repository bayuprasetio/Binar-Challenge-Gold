import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Button = (props) => {
  return (
    <div className="button">
      {window.location.pathname === "/" && (
        <Link className="btn" role="button" to="/cari-mobil">
          Mulai Sewa Mobil
        </Link>
      )}
    </div>
  );
};

export default Button;
