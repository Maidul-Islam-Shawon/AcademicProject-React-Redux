import { ACTION_TYPES } from "./ACTION_TYPES";

export const getStudents = () => ({
  type: ACTION_TYPES.FETCH_ALL,
});

export const getStudentsSuccess = (data) => ({
  type: ACTION_TYPES.FETCH_ALL_SUCCESS,
  payload: data,
});

export const getStudentsFailure = () => ({
  type: ACTION_TYPES.FETCH_ALL_FAILURE,
});

export default function getAllData() {
  return async (dispatch) => {
    dispatch(getStudents());

    try {
      const response = await fetch("https://localhost:44332/api/students");
      const data = await response.json();

      dispatch(getStudentsSuccess(data));
    } catch (err) {
      dispatch(getStudentsFailure());
    }
  };
}
