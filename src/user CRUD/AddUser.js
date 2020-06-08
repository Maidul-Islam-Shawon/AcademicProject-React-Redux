import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import Axios from "axios";

const AddUser = (props) => {
  //console.log("props:", props);
  const defaultValue = {
    firstName: null,
    lastName: null,
    contactNumber: null,
    dateOfBirth: null,
    address: null,
  };

  // props.teacher ? props.teacher : defaultValue

  const [state, setState] = useState({});
  const [value, setValue] = useState(false);

  const teacherId = props.teacher.id;

  useEffect(() => {
    if (teacherId) {
      setState(props.teacher);
    } else {
      setState(defaultValue);
    }
  }, [teacherId]);

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit state:", state);
    props.onFormSubmit(state);
    setState(defaultValue);
    // Axios.post("https://localhost:44332/api/teachers", state).then((res) => {
    //   alert(res.data);
    // });
  };

  let pageTitle;
  let actionStatus;

  //state.id
  if (props.teacher.id) {
    pageTitle = <h2>Edit User</h2>;
    actionStatus = <b>Update</b>;
  } else {
    pageTitle = <h2>Add User</h2>;
    actionStatus = <b>Save</b>;
  }

  return (
    <div>
      {pageTitle}
      <Row>
        <Col sm={6}>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={state.firstName}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={state.lastName}
              />
            </Form.Group>

            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                onChange={handleChange}
                value={state.contactNumber}
              />
            </Form.Group>

            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="text"
                name="dateOfBirth"
                placeholder="Date Of Birth"
                onChange={handleChange}
                value={state.dateOfBirth}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                value={state.address}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control type="hidden" name="id" />
              <Button variant="success" type="submit" onClick={handleSubmit}>
                {actionStatus}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddUser;
