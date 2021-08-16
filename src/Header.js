import React from "react";
import { Link } from "react-router-dom";
import "./custom.css";

export default function Header() {
  return (
    <nav className="nav nav-header">
      <Link className="link link-primary" to="/">
        <h2 className="nav-heading">Fun with Triangles</h2>
      </Link>

      <ul className="list list-inline nav-links">
        <li>
          <Link className="link link-primary" to="/quiz">
            Quiz
          </Link>
        </li>
        <li>
          <Link className="link link-primary" to="/isTriangle">
            Is a Triangle?
          </Link>
        </li>
        <li>
          <Link className="link link-primary" to="/hypotenuse">
            Hypotenuse
          </Link>
        </li>
        <li>
          <Link className="link link-primary" to="/area">
            Area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
