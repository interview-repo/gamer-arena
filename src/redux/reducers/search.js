import * as actions from "../actions";

export const searchedDisputes = (state = false, action) => {
  switch (action.type) {
    case actions.SEARCH_DISPUTES_VALUE:
      return action.value;
    default:
      return state;
  }
};

export const searchedDisputesPage = (state = 1, action) => {
  switch (action.type) {
    case actions.SEARCH_DISPUTES_PAGE:
      return action.page;

    default:
      return state;
  }
};

const search = (
  state = {
    isFetching: false,
    data: [],
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_SEARCH:
      return {
        ...state,
        isFetching: true,
      };
    case actions.RECEIVE_SEARCH:
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

export const searchedResults = (state = {}, action) => {
  switch (action.type) {
    case actions.REQUEST_SEARCH:
    case actions.RECEIVE_SEARCH:
      return {
        ...state,
        [action.value]: {
          ...state[action.value],
          [action.page]: search(state[action.value[action.page]], action),
        },
      };

    default:
      return state;
  }
};
