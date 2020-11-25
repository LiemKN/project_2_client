export const Action = Object.freeze({
  SendEmail: 'SendEmail',
});

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = 'https://project2.maiyasco.me:8443';

export function sendEmail(send_year, send_month, send_day, email_address, code_content) {
  const emailform = {send_year, send_month, send_day, email_address, code_content};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailform)
  }

  return () => {
    fetch(`${host}/send`, options)
    .then(checkForErrors)
    .catch(e => console.error(e));
  };
}