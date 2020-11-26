export const Action = Object.freeze({
  LoadEmail: 'LoadEmail',
  LeaveView: 'LeaveView',
});

export function loadEmail(email) {
  return {
    type: Action.LoadEmail,
    payload: email,
  };
}

export function leaveView(email) {
  return {
    type: Action.LeaveView,
    payload: email,
  };
}

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = 'https://project2.maiyasco.me:8443';

export function retrieveEmail(id) {
  return dispatch => {
    fetch(`${host}/emailform/${id}`)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(loadEmail(data.email[0]));
          console.log(data.email[0]);
        }
      })
      .catch(e => console.error(e));
  };
}

export function sendEmail(send_year, send_month, send_day, email_address, code_content) {
  const emailform = { send_year, send_month, send_day, email_address, code_content };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailform)
  }

  return dispatch => {
    fetch(`${host}/send`, options)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(loadEmail(emailform));
          console.log(emailform);
        }
      })
      .catch(e => console.error(e));
  };
}