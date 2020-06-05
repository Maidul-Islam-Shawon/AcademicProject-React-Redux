import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardCRUD = () => {
  return (
    <div>
      <h2>DashboardCRUD</h2>
      <Link to="/getuser">
        <Button variant="success">Get user</Button>
      </Link>
      <br />
      <br />
      <Link to="/adduser">
        <Button variant="success">Add user</Button>
      </Link>
      <br />
      <br />
      <Link to="/useraction">
        <Button variant="success">User Action</Button>
      </Link>
    </div>
  );
};

export default DashboardCRUD;
