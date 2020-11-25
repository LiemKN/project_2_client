import { Action } from "./actions";

const initialState = {
  isWaiting: false,
  emailforms: [
    // { id: 0, send_year: 2020, send_month: 11, send_day: 25, email_address: "amira.leffler5@ethereal.email", code_content: "<h1>EZ</h1>" },
    // { id: 1, send_year: 2020, send_month: 11, send_day: 22, email_address: "amira.leffler5@ethereal.email", code_content: "<h1>EZ CLAP</h1>" },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.SendEmail:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;