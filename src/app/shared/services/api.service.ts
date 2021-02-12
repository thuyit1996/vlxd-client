import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

type TApiWithoutPayload = (url: string) => Observable<any>;
type TApiWithPayload = (url: string, body?: any) => Observable<any>;


abstract class IApiService {
  abstract getEndPoint: () => string;
  abstract callApiGet: TApiWithoutPayload;
  abstract callApiPost: TApiWithoutPayload;
  abstract callApiPut: TApiWithoutPayload;
  abstract callApiPatch: TApiWithoutPayload;
  abstract callApiDelete: TApiWithoutPayload;
}


@Injectable()
export class ApiService extends IApiService {
  constructor(
    private readonly httpService: HttpClient
  ) {
    super();
  }

  getEndPoint = () => {
    return environment.API_ENDPOINT;
  }

  callApiGet: TApiWithoutPayload = (url) => {
    return this.httpService.get(this.getEndPoint() + url);
  }

  callApiPost: TApiWithPayload = (url, body) => {
    return this.httpService.post(this.getEndPoint() + url, body);
  }

  callApiPut: TApiWithPayload = (url, body?) => {
    return this.httpService.put(this.getEndPoint() + url, body);
  }

  callApiPatch: TApiWithPayload = (url, body?) => {
    return this.httpService.patch(this.getEndPoint() + url, body);
  }

  callApiDelete: TApiWithoutPayload = (url) => {
    return this.httpService.delete(this.getEndPoint() + url);
  }
}