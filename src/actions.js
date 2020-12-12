export const Action = Object.freeze({
  LoadEmail: 'LoadEmail',
  LeaveView: 'LeaveView',
  SetId: 'SetId',
  StartWaiting: 'StartWaiting',
  StopWaiting: 'StopWaiting',
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

export function setId(id) {
  return {
    type: Action.SetId,
    payload: id,
  };
}

function startWaiting () {
  return {
    type: Action.StartWaiting,
  };
}

function stopWaiting () {
  return {
    type: Action.StopWaiting,
  };
}

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = 'https://project2.maiyasco.me:8443';

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
    dispatch(startWaiting());
    fetch(`${host}/send`, options)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(loadEmail(emailform));
          dispatch(setId(data.id));
          dispatch(stopWaiting());
        }
      })
      .catch(e => console.error(e));
  };
}