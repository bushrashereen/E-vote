import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div className="head">
      <div className="my-head-flex">
        <a href="http://localhost:3000/">
          <img className="image" src="./images/manual-voting.png" alt="logo" />
        </a>
        <a href="http://localhost:3000/" className="my-head">
          E-Vote
        </a>
      </div>
    </div>
  );
}
