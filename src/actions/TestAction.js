import { ACTION_TYPES_TEST } from "./ACTION_TYPES_TEST";

export const getTest = () => ({
  type: ACTION_TYPES_TEST.FETCH_ALL,
});

export const getTestSuccess = (data) => ({
  type: ACTION_TYPES_TEST.FETCH_ALL_SUCCESS,
  payload: data,
});

export const getTestFailure = () => ({
  type: ACTION_TYPES_TEST.FETCH_ALL_FAILURE,
});

export default function getAllTestData() {
  return async (dispatch) => {
    dispatch(getTest());

    try {
      const response = await fetch("https://localhost:44332/api/Teachers");
      const data = await response.json();

      dispatch(getTestSuccess(data));
    } catch (err) {
      dispatch(getTestFailure());
    }
  };
}
