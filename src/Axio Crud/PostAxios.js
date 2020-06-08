import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PostAxios = (props) => {
  const [state, setState] = useState({});

  console.log(props.match.params.id);
  const EditID = parseInt(props.match.params.id);

  useEffect(() => {
    if (EditID) {
      Axios.get("https://localhost:44332/api/teachers/" + EditID).then(
        (result) => {
          setState(result.data);
        }
      );
    }
  }, [EditID]);

  const defaultState = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    dateOfBirth: "",
    address: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  //console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (EditID) {
      Axios.put("https://localhost:44332/api/teachers/" + EditID, state).then(
        (result) => {
          //alert(result.data);
          EditToastify();
          setState(defaultState);
          //return <Redirect to="/getalldata" />;
          props.history.push("/getalldata");
        }
      );
    } else {
      Axios.post("https://localhost:44332/api/teachers", state).then(
        (result) => {
          //alert(result.data);
          CreateToastify();
          setState(defaultState);
          //return <Redirect to="/getalldata" />;
          props.history.push("/getalldata");
        }
      );
    }
  };

  const CreateToastify = () =>
    toast.success("Create Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const EditToastify = () =>
    toast.info("Edit Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  return (
    <div>
      <h2>Post Axios</h2>
      <ToastContainer />

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={state.firstName || ""}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={state.lastName || ""}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={handleChange}
            value={state.contactNumber || ""}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="text"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            onChange={handleChange}
            value={state.dateOfBirth || ""}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={state.address || ""}
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default PostAxios;
