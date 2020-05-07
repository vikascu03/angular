import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWordBean{
  constructor(public message:String){};
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  callWelcomeDataService(){
    return this.http.get<HelloWordBean>('http://localhost:8080/hello-world-bean');
    //console.log("welcome data service called");
  }

  callWelcomeDataServiceWithPathVariable(name){

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

  return this.http.get<HelloWordBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
   {headers}
   );
  //console.log("welcome data service called");
}

createBasicAuthenticationHttpHeader() {
    let username = 'in28minutes'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
