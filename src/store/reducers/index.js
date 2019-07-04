import apiReducer from "store/reducers/api";
import { combineReducers } from "redux";
import videosReducer from "store/reducers/video";

export default combineReducers({
  api: apiReducer,
  videos: videosReducer
});
