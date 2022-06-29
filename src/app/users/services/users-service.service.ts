import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  checked: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsersServiceService {
  usersList: User[] = [
    {
      id: 1,
      firstname: 'Clement',
      lastname: 'Potts',
      email: 'kking86@gmail.com',
      phone: '1-219-380-3778',
      checked: false,
    },
    {
      id: 2,
      firstname: 'Ed',
      lastname: 'Coates',
      email: 'ginge121@gmail.com',
      phone: '1-236-550-0286',
      checked: false,
    },
    {
      id: 3,
      firstname: 'Jakub',
      lastname: 'Wolfe',
      email: 'jwolfe@gmail.com',
      phone: '380-50-738-3096',
      checked: false,
    },
    {
      id: 4,
      firstname: 'Logan',
      lastname: 'Stevens',
      email: 'loganstevens@gmail.com',
      phone: '382-63-464-434',
      checked: false,
    },
    {
      id: 5,
      firstname: 'Dominic',
      lastname: 'Bean',
      email: 'dombean65@gmail.com',
      phone: '371-24-218-785',
      checked: false,
    },
  ];

  constructor() {}
}
