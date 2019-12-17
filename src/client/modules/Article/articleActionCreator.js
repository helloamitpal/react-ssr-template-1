import * as actionTypes from './articleActionTypes';

export const fetchArticles = source => (dispatch, getState, { api }) => {
  dispatch({
    type: actionTypes.FETCH_ARTICLES,
    promise: api.get(`/top-headlines?${source || 'country=us'}`),
    payload: {}
  });
};
