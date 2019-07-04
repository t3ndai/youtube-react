import { createAction } from "store/actions";

export const YOUTUBE_LIBRARY_LOADED = "YOUTUBE_LIBRARY_LOADED";
export const youtubeLibraryLoaded = createAction.bind(
  null,
  YOUTUBE_LIBRARY_LOADED
);
