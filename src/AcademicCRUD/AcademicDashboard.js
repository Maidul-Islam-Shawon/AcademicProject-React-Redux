import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AcademicDashboard = () => {
  return (
    <div>
      <h2>AcademicDashboard</h2>

      <Link to="/academicget">
        <Button variant="outline-secondary">Show All Data</Button>
      </Link>
    </div>
  );
};

export default AcademicDashboard;
