import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
import AddUser from "./AddUser";
import axios from "axios";
const apiUrl = "https://localhost:44332/api/teachers";

const UserAction = () => {
  //   const [state, setState] = useState({
  //     isAddUser: false,
  //     error: null,
  //     response: {},
  //     userData: {},
  //     isEditUser: false,
  //     isUserDetails: true,
  //   });

  const [isAddUser, setIsAddUser] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});
  const [teacherData, setTeacherData] = useState({});
  const [isEditUser, setIsEditUser] = useState(false);
  const [isUserDetails, setIsUserDetails] = useState(true);

  const onCreate = () => {
    //setState(((state.isAddUser = true), (state.isUserDetails = false)));
    setIsAddUser(true);
    setIsUserDetails(false);
  };

  //   console.log("isAddUser", isAddUser);
  //   console.log("isUserDetails", isUserDetails);

  const onDetails = () => {
    //setState(((state.isAddUser = false), (state.isUserDetails = true)));
    setIsAddUser(false);
    setIsUserDetails(true);
    // console.log(state);
  };

  const onFormSubmit = (data) => {
    //setState((state.isAddUser = true), (state.isUserDetails = false));
    setIsAddUser(true);
    setIsUserDetails(false);
    if (isEditUser) {
      axios.put(apiUrl, data).then((result) => {
        alert(result.data);
        setResponse(result);
        setIsAddUser(false);
        setIsEditUser(false);
      });
    } else {
      axios.post(apiUrl, data).then((result) => {
        alert(result.data);
        setResponse(result);
        setIsAddUser(false);
        setIsEditUser(false);
      });
    }
  };

  const editUser = (teacherId) => {
    // console.log(teacherId);
    setIsUserDetails(false);
    axios.get(apiUrl + "/" + teacherId).then(
      (result) => {
        setIsEditUser(true);
        setIsAddUser(true);
        setTeacherData(result.data);
      },
      (error) => {
        setError(error);
      }
    );
  };

  let teacherForm;
  if (isAddUser || isEditUser) {
    teacherForm = <AddUser onFormSubmit={onFormSubmit} teacher={teacherData} />;
    //console.log(userForm);
  }

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>CURD operation in React</h1>
        <hr></hr>
        {!isUserDetails && (
          <Button variant="primary" onClick={() => onDetails}>
            User Details
          </Button>
        )}

        {!isAddUser && (
          <Button variant="primary" onClick={() => onCreate()}>
            Add User
          </Button>
        )}
        <br></br>
        {!isAddUser && <UserList editUser={editUser} />}
        {teacherForm}
      </Container>
    </div>
  );
};

export default UserAction;
