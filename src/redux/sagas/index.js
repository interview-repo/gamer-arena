import { all, select, fork, put, call, take } from "redux-saga/effects";
import * as actions from "../actions";
import { instance } from "../../utils/instance";

const activeStepDisputes = (state) => state.selectedDisputes;
const disputesState = (state) => state.disputesResults;

const searchedState = (state) => state.searchedDisputes;
const searchedPageState = (state) => state.searchedDisputesPage;
const searchedResultState = (state) => state.searchedResults;

const getDisputes = ({ step, url = false }) => {
  return instance.get(url ? `?${url}` : "").then((res) => res.data);
};

function* fetchDisputes(value) {
  const disputesResults = yield select(disputesState);
  yield put(actions.requestPosts(value));
  const url = disputesResults[value - 1]?.data?.next.split("/?")[1];
  const posts = yield call(getDisputes, { step: value, url: url });

  yield put(actions.receivePosts(value, posts));
}

function* fetchSearch(value, page = 1) {
  const searchValue = yield select(searchedState);
  const searchResult = yield select(searchedResultState);
  const url =
    searchResult?.[searchValue]?.[page - 1]?.data?.next.split("/?")[1] ??
    `searchUsername=${value}`;

  yield put(actions.requestSeach(value, page));
  const posts = yield call(getDisputes, { step: page, url: url });
  yield put(actions.receiveSeach(value, posts, page));
}

function* findDisputes() {
  while (true) {
    const prevStep = yield select(activeStepDisputes);
    yield take(actions.SELECT_DISPUTES_VALUE);
    const newStep = yield select(activeStepDisputes);
    const disputesResults = yield select(disputesState);

    if (prevStep !== newStep && !disputesResults[newStep]) {
      yield fork(fetchDisputes, newStep);
    }
  }
}

function* searchDisputes() {
  while (true) {
    yield take(actions.SEARCH_DISPUTES_VALUE);
    const searchedValue = yield select(searchedState);
    const searchPrevStep = yield select(searchedPageState);
    const searchResult = yield select(searchedResultState);

    if (searchedValue && !searchResult?.[searchedValue]?.[searchPrevStep]) {
      yield fork(fetchSearch, searchedValue, searchPrevStep);
    }
  }
}

function* gamerArena() {
  const activeData = yield select(activeStepDisputes);
  yield fork(fetchDisputes, activeData);
}

export default function* root() {
  yield all([gamerArena(), findDisputes(), searchDisputes()]);
}
