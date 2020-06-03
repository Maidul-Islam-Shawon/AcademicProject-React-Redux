import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import AxiosPost from "../components/AxiosPost";

const AxiosPage = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    Axios.get("https://localhost:44332/api/teachers").then((response) => {
      setState(response.data);
    });
  }, []);

  console.log(state);
  return (
    <div>
      <h2>Axios Page</h2>
      <Row>
        <Col md={6}>
          <AxiosPost />
        </Col>

        <br />
        <br />
        <Col md={6}>
          <Row>
            {state.map((teacher) => {
              return (
                <Col key={teacher.id} md={6}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{teacher.firstName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {teacher.lastName}
                      </Card.Subtitle>
                      <Card.Text>
                        {teacher.contactNumber}
                        <br />
                        {teacher.dateOfBirth}
                        <br />
                        {teacher.address}
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AxiosPage;
