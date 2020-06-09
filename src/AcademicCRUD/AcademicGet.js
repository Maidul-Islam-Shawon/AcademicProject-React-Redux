import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import { DeleteMessage } from "./TostifyMessage";

const AcademicGet = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Axios.get("https://localhost:44332/api/students").then(
      (result) => {
        setState(result.data);
      },
      (err) => {
        setError(err);
      }
    );
  }, []);

  console.log("state:", state);

  const onDelete = (ID) => {
    Axios.delete("https://localhost:44332/api/students/" + ID).then(
      (result) => {
        DeleteMessage();
        //alert("Successfully Deleted:", result);
        setState(state.filter((std) => std.id !== ID));
      },
      (err) => {
        setError(err);
      }
    );
  };

  if (error)
    return (
      <div>
        <h2>AcademicGet</h2> <hr />
        <div>
          Could not load Table. There was a error. <b> {error.message}</b>
        </div>
      </div>
    );
  return (
    <div>
      <h2>AcademicGet</h2>
      <hr />
      <Link to="/academicpost">
        <Button style={{ marginBottom: "5px" }}>Add</Button>
      </Link>

      <Table striped bordered hover variant="dark">
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
          {state.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.contactNumber}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.address}</td>
                <td>
                  <Link to={`/academicpost/${student.id}`}>
                    <Button variant="info" style={{ margin: "5px" }}>
                      Edit
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => onDelete(student.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AcademicGet;
