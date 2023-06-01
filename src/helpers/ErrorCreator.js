class ErrorCreator {
  constructor(error, customMessage = '', errorStatus = 0) {
    this.error = error;
    this.customMessage = customMessage;
    this.errorStatus = errorStatus;
  }
}

export default ErrorCreator;
