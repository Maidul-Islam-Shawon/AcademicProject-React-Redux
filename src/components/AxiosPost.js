import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
const AxiosPost = () => {
  const [state, setState] = useState([
    {
      firstName: "",
      lastName: "",
      contactNumber: "",
      dateOfBirth: "",
      address: "",
    },
  ]);
  const [teacher, setTeacher] = useState({});

  //   handleChange = (event) => {
  //     this.setState({ name: event.target.value });
  //   };

  Axios.post(`https://localhost:44332/api/teachers`, teacher).then((res) => {
    console.log(res);
    console.log(res.data);
  });

  const handleChange = (event) => {
    //console.log(event.target.value);
    // const { name, value } = event.target;
    //  console.log(event.target.name, event.target.value);
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const teacher = {
      firstName: state.firstName ? state.firstName : null,
      lastName: state.lastName ? state.lastName : null,
      contactNumber: state.contactNumber ? state.contactNumber : null,
      dateOfBirth: state.dateOfBirth ? state.dateOfBirth : null,
      address: state.address ? state.address : null,
    };
    setTeacher(teacher);

    // var bodyFormData = new FormData();
    // bodyFormData.append(teacher);
    // console.log(bodyFormData);

    //console.log(teacher);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={handleChange} />
        </label>
        <br />
        <label>
          ContactNumber:
          <input type="text" name="contactNumber" onChange={handleChange} />
        </label>
        <br />
        <label>
          Date Of Birth:
          <input type="text" name="dateOfBirth" onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AxiosPost;
