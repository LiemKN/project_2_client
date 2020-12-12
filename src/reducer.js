import { Action } from "./actions";

const initialState = {
  isWaiting: false,
  isCreated: false,
  emailToDisplay: {},
  code: "",
  id: -1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.LoadEmail:
      return {
        ...state,
        emailToDisplay: { ...action.payload, isFinished: true },
      };
    case Action.LeaveView:
      return {
        ...state,
        emailToDisplay: { ...action.payload, isFinished: undefined },
        isCreated: true,
      };
    case Action.SetId:
      return {
        ...state,
        id: action.payload,
      };
    case Action.StartWaiting:
      return {
        ...state,
        isWaiting: true,
      };
    case Action.StopWaiting:
      return {
        ...state,
        isWaiting: false,
      };
    default:
      return state;
  }
}

export default reducer;