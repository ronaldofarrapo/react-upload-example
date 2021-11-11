export type HttpRequest = {
    url: string
    method: HttpMethod
    body?: any
    headers?: any
    responseType?: | 'blob' | 'json'
    formData?: boolean
}

export interface HttpClient<R = any> {
    request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    created = 201,
    accepted = 202,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    conflict = 409,
    serverError = 500,
    gatewayTimeout = 504
}

export type HttpResponse<T = any> = {
    statusCode: HttpStatusCode
    body?: T
    conflict?: string
}
