import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import Axios from "axios";
import { AddedMessage, UpdateMessage } from "./TostifyMessage";
import PropTypes from "prop-types";

const AcademicPost = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    dateOfBirth: "",
    address: "",
  });
  const [error, setError] = useState("");

  const studentID = parseInt(props.match.params.id);
  console.log("id:", studentID);

  useEffect(() => {
    if (studentID) {
      Axios.get("https://localhost:44332/api/students/" + studentID).then(
        (result) => {
          setState(result.data);
        },
        (err) => {
          setError(err);
        }
      );
    }
  }, [studentID]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  //console.log(props.history.push("/academicget"));

  // const formValidation = () => {};

  const [validation, setValidation] = useState({
    firstName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      state.firstName.length > 5 ||
      state.firstName === "" ||
      !isNaN(state.firstName)
    ) {
      setValidation({ firstName: "Invalid Input" });
    } else {
      if (studentID) {
        Axios.put(
          "https://localhost:44332/api/students/" + studentID,
          state
        ).then(
          (result) => {
            UpdateMessage();
            // alert("Successfully Updated:", result);
            setState(result.data);
            props.history.push("/academicget");
          },
          (err) => {
            setError(err);
          }
        );
      } else {
        Axios.post("https://localhost:44332/api/students", state).then(
          (result) => {
            AddedMessage();
            //alert("Successfully Created:", result);
            setState(result.data);
            props.history.push("/academicget");
          },
          (err) => {
            setError(err);
          }
        );
      }
    }
  };

  console.log(state);

  if (error)
    return (
      <div>
        <h2>AcademicPost</h2>
        <hr />
        <div>
          There is a error.
          <b> {error.message}</b>
        </div>
      </div>
    );

  let Title;
  let ButtonName;

  if (studentID) {
    Title = <h2>AcademicEdit</h2>;
    ButtonName = (
      <Button variant="primary" type="submit">
        Update
      </Button>
    );
  } else {
    Title = <h2>AcademicPost</h2>;
    ButtonName = (
      <Button variant="primary" type="submit">
        Add
      </Button>
    );
  }

  return (
    <div>
      {Title}
      <hr />

      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={state.firstName || ""}
            />
            <span style={{ color: "red" }}>{validation.firstName}</span>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={state.lastName || ""}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="contactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              onChange={handleChange}
              value={state.contactNumber || ""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="dateOfBirth">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="text"
              name="dateOfBirth"
              placeholder="Date Of Birth"
              onChange={handleChange}
              value={state.dateOfBirth || ""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={state.address || ""}
            />
          </Form.Group>
        </Form.Row>

        {ButtonName}
      </Form>
      <div>error List:</div>
    </div>
  );
};

// AcademicPost.propTypes = {
//   firstName: PropTypes.string.isRequired,
// };

export default AcademicPost;
