import { User } from './../../model/users/user';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private connectservice: ContactService) { }
  public users: User[]
  Users = new User();
  test : User;
  ngOnInit() {
    this.getUsers();

  }



  saveUser(user) {

   let newUSer= new User()
   console.log()
   if(this.Users.id==undefined){
   newUSer.id=this.Users.id;
   newUSer.name=this.Users.name;
   newUSer.username=this.Users.username;
   newUSer.phone=this.Users.phone;
   newUSer.email=this.Users.email;
    this.Users=new User();
    this.connectservice.addUser(newUSer)
      .subscribe(
        data => {
          console.log(data)
          this.users.push(newUSer);
          console.log(newUSer)

        }
      )
  }
  else
  {
    console.log(user)
    console.log(user.id)
    let index = this.users[user.id-1];
    index=user;
console.log(index)

this.connectservice.editUser(user.id,user)
.subscribe(
  data => {
      console.log(JSON.stringify(data))
  });

    newUSer.id=this.Users.id;
    newUSer.name=this.Users.name;
    newUSer.username=this.Users.username;
    newUSer.phone=this.Users.phone;
    newUSer.email=this.Users.email;
     this.Users=new User();
  }
  }
  deleteUser(user) {
    console.log(`delete todo ${user.id}`)
    console.log(`${user.id}`)
    this.connectservice.removeUser(user.id)
      .subscribe(
        data => {
          console.log(data);
          let index = this.users.indexOf(user);
          console.log("dddd"+index)
          this.users.splice(index, 1);
        });
  }


  getUsers() {
    this.connectservice.retrieveAllUsers().subscribe((data: User[]) => {
      this.users = data;

      console.log(this.users);

    }


    );
  }
  updateUser(user: User) {
    let us= new User();
    us.id=user.id;
    us.name=user.name;
    us.username=user.username;
    us.phone=user.phone;
    us.email=user.email;    
    this.Users= us
    console.log(`update todo ${user}`)
    console.log(`${user.id}`)
    this.connectservice.editUser(user.id, user)
      .subscribe(
        data => {
  
        });
  }


}
