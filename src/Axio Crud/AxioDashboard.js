import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AxioDashboard = () => {
  return (
    <div>
      <h2>Axio Dashboard</h2>
      <Link to="/getalldata">
        <Button variant="secondary">Show All Data</Button>
      </Link>
    </div>
  );
};

export default AxioDashboard;
