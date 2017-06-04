import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-login',
  template:`<div *ngIf="user">
      <h2>{{user.name}} details!</h2>
      <div><label>id: </label>{{user.id}}</div>
      <div>
        <div>
          <label>name: </label>
          <a>{{user.name}}</a>
        </div>
        <div>
          <label>Password: </label>
          <input [(ngModel)]="user.pass" placeholder="pass" type="password"/>
        </div>
        <div>
            <button (click)="goLogin()">Login</button>
            <a  [routerLink]="['/files', user.id]">
                <input type="submit" [disabled] ="!isLogged()" value="Files"class="btn btn-success pull-right"/>
            </a>
        </div>
      </div>
    </div>`
})


export class UserLoginComponent {
  public logged = false;
	@Input() user: User;
    goLogin(){
      //Call OAuth2 service
      this.logged = true;
    }
    isLogged():boolean{
      return true==this.logged;
    }

}
