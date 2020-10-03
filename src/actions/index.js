import { SET_ARTICLE_DETAILS, API, FETCH_ARTICLE_DETAILS } from "./types";

export function fetchArticleDetails() {
  return apiAction({
    url: "https://run.mocky.io/v3/04e36c7c-1612-4f09-a4b1-e476f7dfbfa6",
    onSuccess: setArticleDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_ARTICLE_DETAILS,
  });
}

function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data,
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
    },
  };
}
