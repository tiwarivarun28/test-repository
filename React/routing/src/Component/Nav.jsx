import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <div>
        <h2>React Routing</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/help">Help</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}
