export const fetchPosts = () => dispatch => {
  return dispatch({
    type: 'FETCH_POSTS',
    payload: fetch('http://localhost:9000/posts')
      .then(response => response.json())
  })
};
