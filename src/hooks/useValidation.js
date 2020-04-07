import { useState, useEffect } from "react";

const useValidation = () => {
  const [usernameToValidate, setUsernameToValidate] = useState(null);
  const [emailToValidate, setEmailToValidate] = useState(null);
  const [passwordToValidate, setPasswordToValidate] = useState(null);
  const [
    passwordConfirmationToValidate,
    setPasswordConfirmationToValidate
  ] = useState(null);
  const [errorArray, setErrorArray] = useState(null);

  useEffect(() => {
    runValidationRules();
  }, [
    usernameToValidate,
    passwordToValidate,
    passwordConfirmationToValidate,
    emailToValidate
  ]);

  useEffect(() => {
    setErrorArray(null);
  }, []);

  const pushValidationResultsToErrorArray = validationTestResults => {
    setErrorArray(errorArray => [...errorArray].concat(validationTestResults));
  };

  const runValidationRules = () => {
    setErrorArray([]);
    let validationTestResults = [];
    if (!passwordToValidate) {
      validationTestResults.push("Password does not exist!");
    }
    if (!passwordConfirmationToValidate) {
      validationTestResults.push("Password confirmation does not exist!");
    }
    if (!usernameToValidate) {
      validationTestResults.push("Name does not exist!");
    }
    if (passwordToValidate && passwordToValidate.length < 5) {
      validationTestResults.push("Password length less than 5 characters!");
    }
    if (
      passwordToValidate &&
      passwordConfirmationToValidate &&
      passwordToValidate !== passwordConfirmationToValidate
    ) {
      validationTestResults.push("Password and password validation different!");
    }

    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    if (emailToValidate && (emailToValidate === "" || !re.test(emailToValidate))) {
        validationTestResults.push("Please enter a valid email address.");
    }

    pushValidationResultsToErrorArray(validationTestResults);
  };

  const validate = (name, email, password, passwordConfirmation) => {
    setUsernameToValidate(name);
    setEmailToValidate(email);
    setPasswordToValidate(password);
    setPasswordConfirmationToValidate(passwordConfirmation);
  };

  return { validate, errorArray };
};

export default useValidation;
