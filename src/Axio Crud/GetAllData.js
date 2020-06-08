import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const GetAllData = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState({ search: "" });

  useEffect(() => {
    Axios.get("https://localhost:44332/api/teachers").then((result) => {
      setState(result.data);
    });
  }, []);

  const deleteTeacher = (teacherId) => {
    Axios.delete("https://localhost:44332/api/teachers/" + teacherId).then(
      (result) => {
        //alert(result.data);
        deleteMessageToastify();
        setState(state.filter((teacher) => teacher.id !== teacherId));
      }
    );
  };

  const handleSearchChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearch({ ...search, [name]: value });
  };

  //console.log(search);

  const handleSearch = (event) => {
    event.preventDefault();
    Axios.get(
      "https://localhost:44332/api/teachers/find?search=" + search.search
    ).then((result) => {
      console.log("search:", result.data);
      setState(result.data);
    });
  };

  //   const [editId, setEditId] = useState();
  //   const editTeacher = (id) => {
  //     console.log(id);
  //     setEditId(id);
  //   };

  const deleteMessageToastify = () =>
    toast.error("Delete Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  console.log(state);
  return (
    <div>
      <ToastContainer />
      <h2>Get GetAll Data</h2>

      <Form noValidate onSubmit={handleSearch}>
        <Row>
          <Col md={8}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleSearchChange}
                // value={search.search}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>

      <br></br>
      <Link to="/postaxios">
        <Button style={{ marginBottom: "5px" }}>Add</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.contactNumber}</td>
              <td>{teacher.dateOfBirth}</td>
              <td>{teacher.address}</td>
              <td>
                <Link to={`/postaxios/${teacher.id}`}>
                  <Button
                    style={{ margin: "1px" }}
                    variant="info"
                    //onClick={() => editTeacher(teacher.id)}
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  style={{ margin: "1px" }}
                  variant="danger"
                  onClick={() => deleteTeacher(teacher.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GetAllData;
