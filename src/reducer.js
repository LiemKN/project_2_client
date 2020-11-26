import { Action } from "./actions";

const initialState = {
  isWaiting: false,
  emailToDisplay: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.LoadEmail:
      return {
        ...state,
        emailToDisplay: {...action.payload, isFinished: true},
      };
    case Action.LeaveView:
      return {
        ...state,
        emailToDisplay: {...action.payload, isFinished: undefined},
      };
    default:
      return state;
  }
}

export default reducer;