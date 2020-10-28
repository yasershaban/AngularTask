import { User } from './../model/users/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http:HttpClient


  ) { }

  retrieveAllUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  removeUser( id){
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text' })
  }

  editUser( id, user){
    return this.http.put(
          `https://jsonplaceholder.typicode.com/users/${id}`,user, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
           responseType: 'text' 
      }) ;
  }

  addUser(user){
    return this.http.post(`https://jsonplaceholder.typicode.com/users`,user,{headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text' 
}) ;
              
}
 }