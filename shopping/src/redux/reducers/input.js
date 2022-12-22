const initialState = {};

export default function inputReducer (state = initialState, { type, payload }) {
  const reducer = {
    CHANGE: { ...state, value: payload },
  };
  return reducer[type] ?? state;
};
