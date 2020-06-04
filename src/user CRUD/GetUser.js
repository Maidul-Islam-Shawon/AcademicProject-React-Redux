//learning from below tutorial
// https://www.c-sharpcorner.com/article/crud-operations-in-reactjs-with-axios-using-web-api-and-sql-server/
//https://bezkoder.com/react-hooks-crud-axios-api/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const apiUrl = "https://localhost:44332/api/students";

const GetUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios.get(apiUrl).then(
      (res) => {
        setUsers(res.data);
      },
      (err) => {
        setError(err);
      }
    );
  }, []);

  // console.log(users);

  const deleteUser = (userId) => {
    axios.delete(apiUrl + "/" + userId).then((result) => {
      deleteMessageToastify();
      setResponse(result);
      setUsers(users.filter((user) => user.id !== userId));
    });
  };

  console.log(response);
  console.log(users);

  const deleteMessageToastify = () =>
    toast.error("Delete Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ToastContainer />

      <h2>Get User - CRUD</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.contactNumber}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>
                  {/* <Button
                    variant="info"
                    onClick={() => this.props.editUser(user.UserId)}
                  >
                    Edit
                  </Button> */}
                  <Button variant="danger" onClick={() => deleteUser(user.id)}>
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

export default GetUser;
