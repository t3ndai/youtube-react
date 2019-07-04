import { all, call, put, fork } from "redux-saga/effects";
import { watchMostPopularVideos } from "store/sagas/video";

export default function*() {
  yield all([fork(watchMostPopularVideos)]);
}

/*
 * entiry must have a success, request, and failure method
 * request is a function that returns a promise when called
 **/
export function* fetchEntity(request, entity, ...args) {
  try {
    const response = yield call(request);
    // we directly return the result object and throw away the headers and status text here
    // if status are needed, then instead of returning the response.result, we have to to just return the response
    yield put(entity.success(response.result, ...args));
  } catch (err) {
    yield put(entity.failure(err, ...args));
  }
}
