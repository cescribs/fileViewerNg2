import { Component,OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'my-users',
  template: `<h2>{{message}}!</h2>
	<h2>My Users</h2>
<div class="usersColumn">
  <ul class="users">
  		    <li *ngFor="let user of users" (click)="onSelect(user)"
  		        [class.selected]="user === selectedUser" class="col-1-4">
              <!--  [routerLink]="['/files', user.id]"  -->
  			   <span class="badge">{{user.id}}</span> {{user.name}} Role : {{user.role}}
		     </li>
	   </ul>
  </div>
  <div class="loginColumn">
	 <user-login [user]="selectedUser"></user-login>
  </div>`,
	styles: [`
    .usersColumn{
      float: left;
    width: 300px;
    height: 200px;
    margin-left: 10px;
  }
  .loginColumn{
    float: left;
    width: 400px;
    height: 200px;
    margin-left: 10px;
  }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .users .role {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    providers: [UserService]
})

export class UsersComponent implements OnInit{
  message = 'Introduce your credentials';
  selectedUser: User;
  users : User[];
  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
