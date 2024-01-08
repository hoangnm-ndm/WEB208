import { Component } from '@angular/core';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WD18204-V16';
  userInfor: User = {
    username: '',
    password: '',
  };
  login() {
    console.log(this.userInfor);
  }
}
