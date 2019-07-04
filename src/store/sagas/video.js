import { call, fork, take } from "redux-saga/effects";
import * as api from "store/api/youtube-api";
import * as videoActions from "store/actions/video";
import { REQUEST } from "store/actions/index";
import { fetchEntity } from "store/sagas/index";

export function* fetchMostPopularVideos(
  amount,
  loadDescription,
  nextPageToken
) {
  const request = api.buildMostPopularVideosRequest.bind(
    null,
    amount,
    loadDescription,
    nextPageToken
  );
  yield fetchEntity(request, videoActions.mostPopular);
}

export function* watchMostPopularVideos() {
  while (true) {
    const { amount, loadDescription, nextPageToken } = yield take(
      videoActions.MOST_POPULAR[REQUEST]
    );
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}
