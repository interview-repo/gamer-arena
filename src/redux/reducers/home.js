import * as actions from "../actions";

export const selectedDisputes = (state = 1, action) => {
  switch (action.type) {
    case actions.SELECT_DISPUTES_VALUE:
      return action.value;
    default:
      return state;
  }
};

const posts = (
  state = {
    isFetching: false,
    data: [],
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_RESULTS:
      return {
        ...state,
        isFetching: true,
      };

    case actions.RECEIVE_RESULTS:
      return {
        ...state,
        isFetching: false,
        data: action.posts,
        lastUpdated: action.receivedAt,
      };

    default:
      return state;
  }
};

export const disputesResults = (state = {}, action) => {
  switch (action.type) {
    case actions.REQUEST_RESULTS:
    case actions.RECEIVE_RESULTS:
      return {
        ...state,
        [action.value]: posts(state[action.value], action),
      };
    default:
      return state;
  }
};
