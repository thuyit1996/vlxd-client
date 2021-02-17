import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

const API_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
};
export class ApiService {
  handleSuccess = (response) => {
    if (response.response && response.status >= 200 && response.status < 300) {
      return response.response;
    } else {
      return null;
    }
  }
  handleError = response => {
    return response?.error?.message || "Có lỗi xảy ra, vui lòng thử lại sau";
  };

  callApiHandle = (path, method, body = {}) => {
    const url = "http://localhost:3100" + path;
    return ajax({
      method,
      url,
      body
    }).pipe(map(this.handleSuccess),catchError(this.handleError));
  };

  doGetApi = url => {
    return this.callApiHandle(url, API_METHOD.GET);
  };

  doPostApi = (url, body = {}) => {
    return this.callApiHandle(url, API_METHOD.POST, body);
  };

  doPutApi = (url, body = {}) => {
    return this.callApiHandle(url, API_METHOD.PUT, body);
  };

  doPatchApi = (url, body = {}) => {
    return this.callApiHandle(url, API_METHOD.PATCH, body);
  };

  doDeleteApi = url => {
    return this.callApiHandle(url, API_METHOD.DELETE);
  };
}
