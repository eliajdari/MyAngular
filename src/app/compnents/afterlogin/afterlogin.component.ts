import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
  @Input()@Output() login:boolean;
  constructor() { }

  ngOnInit() {
    this.login=true;
  }

}
