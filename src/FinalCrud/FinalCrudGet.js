import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

const FinalCrudGet = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    Axios.get("https://localhost:44332/api/students").then((result) => {
      setState(result.data);
    });
  }, []);

  console.log(state);

  return (
    <div>
      <h2>FinalCrudGet</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FinalCrudGet;
