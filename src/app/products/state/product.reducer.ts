const intialState = {
  showProductCode: false
};

export function reducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: payload
      };

    default:
      return state;
  }
}
