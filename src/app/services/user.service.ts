import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any> | undefined;

  constructor() { 
    this.users = [
      {
        firstName: 'Roy',
        lastName: 'Samson',
        email: 'roysamson@gmail.com',
        isActive: true,
        registered: new Date('23/08/2021 02:20:00'),
        hide: true
      },
      {
        firstName: 'David',
        lastName: 'William',
        email: 'davidwilliam@gmail.com',
        isActive: false,
        registered: new Date('15/04/20197 05:40:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable();
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
