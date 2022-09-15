import { makeAutoObservable } from "mobx";

class HttpRequestStore {
  constructor() {
    makeAutoObservable(this);
  }

  isLoading = false;
  isSuccess = false;
  isCompleted = false;

  error = null;

  get isError() {
    return !this.isSuccess;
  }

  resetHttpRequestState = () => {
    this.isLoading = false;
    this.isSuccess = false;
    this.isCompleted = false;
  };

  startLoading = () => {
    this.isLoading = true;
  };

  handleRequestSuccess = () => {
    this.isSuccess = true;
    this.error = null;
  };

  handleRequestError = (err) => {
    this.error = err;
    console.error(err);
  };

  handleRequestComplete = () => {
    this.isLoading = false;
    this.isCompleted = true;
  };

  async executeRequest(doRequestCallback, rethrowError = false) {
    this.resetHttpRequestState();

    this.startLoading();
    const response = await doRequestCallback();

    if (response?.error) {
      this.handleRequestError(response.error);
    } else {
      this.handleRequestSuccess();
    }

    this.handleRequestComplete();

    return response;
  }
}

export default HttpRequestStore;
