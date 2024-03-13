import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = {
    firstName: 'Alban',
    lastName: 'Pelissier',
    age: 30,
    email: 'alban@pelissier.dev'
  }
}
