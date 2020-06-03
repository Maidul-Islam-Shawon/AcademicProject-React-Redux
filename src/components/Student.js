import React from "react";
import { Table } from "react-bootstrap";

const Student = ({ students }) => {
  console.log(students);
  const renderTable = () => {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.contactNumber}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <p>Table</p>
      {renderTable()}
    </div>
  );
};

export default Student;
