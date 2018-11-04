const initialState = {items: []};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_POSTS_FULFILLED':
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
