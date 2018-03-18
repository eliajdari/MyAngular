import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()@Output() login:boolean;
  constructor() { }

  ngOnInit() {
    this.login=false;
  }


}
