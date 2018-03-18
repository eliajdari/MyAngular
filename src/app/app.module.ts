import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataService} from './services/data.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './compnents/login/login.component';
import { AfterloginComponent } from './compnents/afterlogin/afterlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AfterloginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
