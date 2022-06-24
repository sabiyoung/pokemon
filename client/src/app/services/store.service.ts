import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface User{
  name:string;
  email:string;
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {
private looggedInUser = new BehaviorSubject<User | null>(null);
  constructor() { }
}
