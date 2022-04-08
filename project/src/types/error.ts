export type InputError = {
  error: {
    email: string,
    password: string,
    formErrors: {email: string, password: string},
    emailValid: boolean,
    passwordValid: boolean,
    formValid: boolean
  }
}

export type ErrorType = unknown;
