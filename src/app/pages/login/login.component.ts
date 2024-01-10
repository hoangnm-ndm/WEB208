import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userInfor: User = {
    username: '',
    password: '',
  };
  login() {}
}
