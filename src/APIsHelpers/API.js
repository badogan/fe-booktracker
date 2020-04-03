const URL_userSignup = "http://localhost:3003/signup";
const URL_userSignin = "http://127.0.0.1:5000/api/v1/users/login";
const PART1_URL_Books = "http://127.0.0.1:5000/api/v1/users/";
const PART2_URL_Books = "/books";
const URL_currentPanic = "http://localhost:3003/panic_current";
const URL_updatePanic = "http://localhost:3003/panic_update";

const postSimple = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(obj)
  });
};

const postAuth = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(obj)
  });
};

const getSimple = url => {
  return fetch(url);
};

const getWithAuth = url => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`
    }
  });
};

const newUserSignUp = userSignupObject => {
  return postSimple(URL_userSignup, userSignupObject).then(response =>
    response.json()
  );
};

const getCurrentPanicStatus = () => {
  return getSimple(URL_currentPanic);
};

const postNewPanicStatus = obj => {
  return postAuth(URL_updatePanic, obj);
};

const UserSignIn = userSignInObject => {
  return postSimple(URL_userSignin, userSignInObject).then(response =>
    response.json()
  );
};

const getAllBooks = userId => {
  const url = `${PART1_URL_Books}${userId}${PART2_URL_Books}`;
  console.log('url IS: ',url)
  return getWithAuth(url).then(response => response.json());
};

export default {
  UserSignIn,
  getAllBooks
  //   newUserSignUp,
  //   getCurrentPanicStatus,
  //   postNewPanicStatus
};
