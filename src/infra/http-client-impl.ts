import { HttpClient, HttpRequest, HttpResponse } from "./http-client";


export class HttpClientImpl implements HttpClient {

    async request(data: HttpRequest): Promise<HttpResponse> {

        return {
            statusCode: 200
        };
    }

}