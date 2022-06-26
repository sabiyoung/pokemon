import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user$= this.store.loggedInUser$;
  constructor(private store:StoreService) { }

  ngOnInit(): void {
  }
login(){
  this.store.setLoggedInUser({name:'John',email:'j'+Math.random()+'@gmail.com'});
}
logout(){
  this.store.logout();
}
}
