import { hashHistory } from 'react-router';

/**
 * @param {Object} query
 */
export const addQuery = (query) => {
  const location = Object.assign({}, hashHistory.getCurrentLocation());

  Object.assign(location.query, query);
  // or simple replace location.query if you want to completely change params

  hashHistory.push(location);
};

/**
 * @param {...String} queryNames
 */
export const removeQuery = (...queryNames) => {
  const location = Object.assign({}, hashHistory.getCurrentLocation());
  queryNames.forEach(q => delete location.query[q]);
  hashHistory.push(location);
};
