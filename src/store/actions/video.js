import {
  createAction,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/actions/index";

export const MOST_POPULAR = createRequestTypes("MOST_POPULAR");
export const mostPopular = {
  request: (amount, loadDescription, nextPageTaken) =>
    createAction(MOST_POPULAR[REQUEST], {
      amount,
      loadDescription,
      nextPageTaken
    }),
  success: response => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: response => createAction(MOST_POPULAR[FAILURE], { response })
};
