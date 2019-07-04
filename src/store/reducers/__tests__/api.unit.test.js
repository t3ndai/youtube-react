import apiReducer from "store/reducers/api";
import { YOUTUBE_LIBRARY_LOADED } from "store/actions/api";

const initialState = {
  libraryLoaded: false
};

describe("api reducer", () => {
  test("test unused action type with initial state", () => {
    const unusedActionType = "unused-action-type";
    const expectedEndState = { ...initialState };
    expect(apiReducer(undefined, { type: unusedActionType })).toEqual(
      expectedEndState
    );
  });

  test("test api reducer with YOUTUBE_LIBRARY_LOADED action", () => {
    const startState = { ...initialState };
    const expectedEndState = {
      libraryLoaded: true
    };
    expect(apiReducer(startState, { type: YOUTUBE_LIBRARY_LOADED })).toEqual(
      expectedEndState
    );
  });

  test("test api reducer for idempotence with YOUTUBE_LIBRARY_LOADED action and library alread loaded", () => {
    const startState = {
      libraryLoaded: true
    };
    expect(apiReducer(startState, { type: YOUTUBE_LIBRARY_LOADED })).toEqual(
      startState
    );
  });
});
