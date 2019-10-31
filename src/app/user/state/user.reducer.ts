const initialState = {
  maskUserName: false
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(state);
  console.log('payload:' + payload);
  switch (type) {

    case 'TOGGLE_USER_MASK':
      return {
        ...state,
        maskUserName: payload
      };

    default:
      return state;
  }
}
