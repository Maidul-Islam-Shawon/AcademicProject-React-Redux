import React from "react";
import { Row, Col } from "react-bootstrap";
import FinalCrudGet from "./FinalCrudGet";

const FinalCrudDashboard = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>FinalCrudDashboard</h2>
      <hr />
      <Row>
        <Col>
          <FinalCrudGet />
        </Col>
      </Row>
    </div>
  );
};

export default FinalCrudDashboard;
