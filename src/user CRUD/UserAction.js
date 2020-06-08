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

  const [isAddTeacher, setIsAddTeacher] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});
  const [teacherData, setTeacherData] = useState({});
  const [isEditTeacher, setIsEditTeacher] = useState(false);
  const [isTeacherDetails, setIsTeacherDetails] = useState(true);

  const onCreate = () => {
    //setState(((state.isAddUser = true), (state.isUserDetails = false)));
    setIsAddTeacher(true);
    setIsTeacherDetails(false);
  };

  //   console.log("isAddUser", isAddUser);
  //   console.log("isUserDetails", isUserDetails);

  const onDetails = () => {
    //setState(((state.isAddUser = false), (state.isUserDetails = true)));
    setIsAddTeacher(false);
    setIsTeacherDetails(true);
    // console.log(state);
  };

  const onFormSubmit = (data) => {
    //setState((state.isAddUser = true), (state.isUserDetails = false));
    setIsAddTeacher(true);
    setIsTeacherDetails(false);
    if (isEditTeacher) {
      axios.put(apiUrl + "/" + data.id, data).then((result) => {
        alert(result.data);
        setResponse(result);
        setIsAddTeacher(false);
        setIsEditTeacher(false);
      });
    } else {
      axios.post(apiUrl, data).then((result) => {
        alert(result.data);
        setResponse(result);
        setIsAddTeacher(false);
        setIsEditTeacher(false);
      });
    }
  };

  const editUser = (teacherId) => {
    // console.log(teacherId);
    setIsTeacherDetails(false);
    axios.get(apiUrl + "/" + teacherId).then(
      (result) => {
        setIsEditTeacher(true);
        setIsAddTeacher(true);
        setTeacherData(result.data);
      },
      (error) => {
        setError(error);
      }
    );
  };

  let teacherForm;
  if (isAddTeacher || isEditTeacher) {
    teacherForm = <AddUser onFormSubmit={onFormSubmit} teacher={teacherData} />;
    //console.log(userForm);
  }

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>CURD operation in React</h1>
        <hr />
        {!isTeacherDetails && (
          <Button variant="primary" onClick={() => onDetails}>
            User Details
          </Button>
        )}

        {!isAddTeacher && (
          <Button variant="primary" onClick={() => onCreate()}>
            Add User
          </Button>
        )}
        <br></br>
        {!isAddTeacher && <UserList editUser={editUser} />}
        {teacherForm}

        <br></br>

        {!isTeacherDetails && <div>showing because of false</div>}
      </Container>
    </div>
  );
};

export default UserAction;
