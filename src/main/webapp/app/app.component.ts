import { Component  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';



@Component({
  selector: 'my-app',
  template: `
  <head>
  <base href="/">
  </head>
    <h1>{{firstName}}</h1>
  `
})
export class AppComponent {
  title = '';
  firstName: any;
  
  constructor (private http: Http) {

  this.getHeroes();

  }
  
    private heroesUrl = '/JerseyAngular2/rest/hello/get';  // URL to web API
	
	 getHeroes () {
	 
	  this.http.get(this.heroesUrl).map((res: Response) => res.json()).subscribe(res => this.firstName = res.firstName);
      
	   console.log(this.firstName); 
	
	  
	 }
	 
	 private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
	 
	  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
