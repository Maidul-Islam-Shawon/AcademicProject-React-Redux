import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <>
      <h2>Dashboard</h2>

      <Link to="/students">
        <Button variant="warning">Student</Button>
      </Link>
      <br />
      <br />
      <Link to="/axios">
        <Button variant="warning">Axios Page</Button>
      </Link>
    </>
  );
};

export default DashboardPage;
