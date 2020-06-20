export const SELECT_DISPUTES_VALUE = "SELECT_DISPUTES_VALUE";
export const REQUEST_RESULTS = "REQUEST_RESULTS";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const SEARCH_DISPUTES_VALUE = "SEARCH_DISPUTES_VALUE";
export const SEARCH_DISPUTES_PAGE = "SEARCH_DISPUTES_PAGE";
export const REQUEST_SEARCH = "REQUEST_SEARCH";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

// home actions
export const selectDisputes = (value) => {
  return {
    type: SELECT_DISPUTES_VALUE,
    value,
  };
};

export const requestPosts = (value) => {
  return {
    type: REQUEST_RESULTS,
    value,
  };
};

export const receivePosts = (value, posts) => {
  return {
    type: RECEIVE_RESULTS,
    value,
    posts,
    receivedAt: new Date().setMilliseconds(0),
  };
};

// search actions
export const searchDisputes = (value, page = 1) => {
  return {
    type: SEARCH_DISPUTES_VALUE,
    value,
    page,
  };
};

export const searchDisputesPage = (page = 1) => {
  return {
    type: SEARCH_DISPUTES_PAGE,
    page,
  };
};

export const requestSeach = (value, page) => {
  return {
    type: REQUEST_SEARCH,
    value,
    page,
  };
};

export const receiveSeach = (value, posts, page) => {
  return {
    type: RECEIVE_SEARCH,
    value,
    posts,
    page,
    receivedAt: new Date().setMilliseconds(0),
  };
};
