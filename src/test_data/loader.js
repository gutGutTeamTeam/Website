function fetchEmails(callback) {
  fetch("https://7a03b0bd.r26.cpolar.top/get_emails", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(callback)
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postEmails(emails, callback) {
  fetch("https://7a03b0bd.r26.cpolar.top/post_emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: emails,
    }),
  })
    .then((response) => {
      response.json().then(callback);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export { fetchEmails, postEmails };
