import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';


import { UserLoginComponent } from './user-login.component';
import { AppComponent }  from './app.component';
import { UsersComponent }  from './users.component';
import { UserService } from './user.service';
import {FileViewerComponent} from './fileViewer.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersComponent
      },{
        path:'files/:id',
        component: FileViewerComponent}
    ])
  ],
  declarations: [
  	AppComponent,
    UsersComponent,
  	UserLoginComponent,
    FileViewerComponent
     ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})



export class AppModule { }
