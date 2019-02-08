import fetch from "node-fetch";

export const p_one_req = (uri, method, body) =>
  fetch(`https://lifexone.org/coachme/api/auth/${uri}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body
  });

export const p_two_req = (uri, method, body) =>
  fetch(`https://catalysttests.com/app/api/auth/${uri}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
