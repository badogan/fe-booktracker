// const URL_userSignup = "http://localhost:3003/signup";
// const URL_userSignin = "http://127.0.0.1:5000/api/v1/users/login";
const URL_userSignin = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/login`
const URL_userSignup = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/signup`
const PART1_URL_Books = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/`
// const PART1_URL_Books = "http://127.0.0.1:5000/api/v1/users/";
const PART2_URL_Books = "/books";

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

const postWithAuth = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`
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

const deleteWithAuth = url => {
  return fetch(url, {
    method: "DELETE",
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

// const newUserSignUp = userSignupObject => {
//   return postSimple(URL_userSignup, userSignupObject).then(response =>
//     response.json()
//   );
// };

const UserSignIn = userSignInObject => {  
  return postSimple(URL_userSignin, userSignInObject).then(response =>
    response.json()
  );
};

const UserSignup = userSignupObject => {  
  return postSimple(URL_userSignup, userSignupObject).then(response =>
    response.json()
  );
};

const getAllBooks = userId => {
  const url = `${PART1_URL_Books}${userId}${PART2_URL_Books}`;
  return getWithAuth(url).then(response => response.json());
};

const patchBook = (userId, bookId, patchObj) => {
  const url = `${PART1_URL_Books}${userId}${PART2_URL_Books}/${bookId}`;
  return patchWithAuth(url, patchObj);
};

const addBook = (userId, newObj) => {
  const url = `${PART1_URL_Books}${userId}${PART2_URL_Books}`;
  return postWithAuth(url, newObj).then(response => response.json());
};

const deleteBook = (userId, bookId) => {
  const url = `${PART1_URL_Books}${userId}${PART2_URL_Books}/${bookId}`;
  return deleteWithAuth(url)
};

export default {
  UserSignIn,
  UserSignup,
  getAllBooks,
  patchBook,
  addBook,
  deleteBook
  //   newUserSignUp,
};
