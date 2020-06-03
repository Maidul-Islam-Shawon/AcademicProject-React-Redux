import React, { useEffect } from "react";
import { connect } from "react-redux";
import getAllData from "../actions/StudentAction";
import Student from "../components/Student";

const StudentsPage = ({ dispatch, students, loading, hasError }) => {
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
  //console.log(students);

  const renderData = () => {
    if (loading) return <p>Loading...</p>;
    if (hasError) return <p>Error Occured...</p>;
  };
  return (
    <div>
      <h2>Students Page</h2>
      {renderData()}
      <Student students={students} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  students: state.students.students,
  loading: state.students.loading,
  hasError: state.students.hasError,
});

// const maplifeToProps = (state) => {
//   console.log(state);
// };
export default connect(mapStateToProps)(StudentsPage);
