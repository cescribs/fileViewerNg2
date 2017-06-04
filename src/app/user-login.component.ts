import { Component, Input } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'user-login',
  template:`<div *ngIf="user">
      <h2>{{user.name}} details!</h2>
      <div><label>id: </label>{{user.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="user.name" placeholder="name">
        <input [(ngModel)]="user.pass" placeholder="pass" type="password"/>
          <button (click)="goLogin()">Login</button>
          <a  [routerLink]="['/files', user.id]"><button class="btn btn-success pull-right" > Files</button></a>
      </div>
    </div>`
})

export class UserLoginComponent {
	@Input() user: User;
}
