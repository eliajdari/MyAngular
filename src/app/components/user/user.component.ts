import { Component, OnInit, Input, Output } from '@angular/core';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address:Address;
  hobbies :string[];
  posts : Post[];
  constructor(private dataService: DataService) {

   }

  ngOnInit() {
    this.name = "Elham";
    this.age =27;
    this.email = "ajdari.ee@gmail.com";
    this.address = {
      street :"felestin",
      city :"tehran",
      state: "tehran"
    };
    this.hobbies =["code","food"];
    this.dataService.getPosts().subscribe((posts)=>{
      //console.log(posts);
      this.posts = posts;
   }
    //this.dataService.getPosts2().subscribe((posts)=>{
     // console.log(posts);
      //this.posts = posts;
   // }
  )
  }
  onClick(){
    this.name ="Saeed";
    this.hobbies.push('aa');
    
  }
  addHobby(hobby){
 this.hobbies.push(hobby);
 return false;
  }

}
interface Address {
street: string,
city: string,
state: string
}
interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}

