import { HttpHeaders, HttpClient } from '@angular/common/http';

export class BaseApi{
    private baseUrl='http://localhost:3000';
    constructor(public httpClient: HttpClient){
    }
    private getUrl(url:string){
      return  this.baseUrl + url;
    }
    public get(url:string, header: HttpHeaders){
        let requestOptinons = {
            headers: header
        }
        return this.httpClient.get(this.getUrl(url), requestOptinons);
    }
    public post(url:string, data, header: HttpHeaders){
        let requestOptinons = {
            headers: header
        }
        return this.httpClient.post(this.getUrl(url), data, requestOptinons);
    }
    public put(url:string, data, header: HttpHeaders){
        let requestOptinons = {
            headers: header
        }
        return this.httpClient.put(this.getUrl(url), data, requestOptinons);
    }
    public delete(url:string, header: HttpHeaders){
        let requestOptinons = {
            headers: header
        }
        return this.httpClient.delete(this.getUrl(url), requestOptinons);
    }
}