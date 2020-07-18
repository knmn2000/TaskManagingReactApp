import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h2>
          {" "}
          <FontAwesomeIcon icon={faListAlt} />
          <span>TaskManager</span>
        </h2>
      </nav>
    </div>
  );
};
