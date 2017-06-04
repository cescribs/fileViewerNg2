import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
