import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
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
