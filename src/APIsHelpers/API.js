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

const patchWithAuth = (url, obj) => {
    return fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
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
  console.log("url IS: ", url);
  return getWithAuth(url).then(response => response.json());
};

const patchBook = (userId, bookId, patchObj) => {
  const url = `${PART1_URL_Books}${userId}${PART2_URL_Books}/${bookId}`;
  return patchWithAuth(url,patchObj)
};

export default {
  UserSignIn,
  getAllBooks,
  patchBook
  //   newUserSignUp,
  //   getCurrentPanicStatus,
  //   postNewPanicStatus
};
