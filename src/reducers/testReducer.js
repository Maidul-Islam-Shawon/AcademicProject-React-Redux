import { ACTION_TYPES_TEST } from "../actions/ACTION_TYPES_TEST";

const initialState = {
  tests: [],
  loading: false,
  hasError: false,
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES_TEST.FETCH_ALL:
      return { ...state, loading: true };

    case ACTION_TYPES_TEST.FETCH_ALL_SUCCESS:
      return { tests: action.payload, loading: false };

    case ACTION_TYPES_TEST.FETCH_ALL_FAILURE:
      return { ...state, loading: false, hasError: true };

    default:
      return state;
  }
}
