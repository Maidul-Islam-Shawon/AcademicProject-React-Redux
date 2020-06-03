import { ACTION_TYPES } from "../actions/ACTION_TYPES";

const initialState = {
  students: [],
  loading: false,
  hasError: false,
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return { ...state, loading: true };

    case ACTION_TYPES.FETCH_ALL_SUCCESS:
      return { students: action.payload, loading: false };

    case ACTION_TYPES.FETCH_ALL_FAILURE:
      return { ...state, loading: false, hasError: true };

    default:
      return state;
  }
}
