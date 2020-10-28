import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http :HttpClient) { }

  
  getAllServices() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
