import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HelloComponent} from "./components/hello/hello.component";
import {UserService} from "./services/user.service";
import {NgForOf} from "@angular/common";
import {UserComponent} from "./components/user/user.component";
import {CounterComponent} from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, NgForOf, UserComponent, CounterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'you';
  users: string[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers()
  }

  addUser(): void {
    const newUser = prompt("Enter a name");
    if (newUser) {
      this.userService.addUser(newUser)
      this.users = this.userService.getUsers()
    }
  }
}
