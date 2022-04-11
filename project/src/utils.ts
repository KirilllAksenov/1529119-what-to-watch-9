const addErrorMessage=(element: HTMLInputElement, message: string)=> {
  if (message) {
    element.setCustomValidity(message);
    element.style.border = '3px solid red';
  } else {
    element.setCustomValidity('');
    element.style.border = '';
  }

  element.reportValidity();
};

const checkValidateEmail = (value: string) => {
  let errorMessage = '';
  if (!/^[\w]{1}[\w-\\.]*@[\w-]+\.[a-z]{2,4}$/i.test(value)) {
    errorMessage = 'Email должен быть написан полностью';
  }

  return errorMessage;
};

const checkValidatePassword = (value: string) => {
  let errorMessage = '';
  if (!/(?=.*\d)(?=.*[a-z])/i.test(value)) {
    errorMessage = 'Пароль должен содержать цифры и буквы';
  }

  return errorMessage;
};
export {checkValidatePassword, addErrorMessage, checkValidateEmail};
