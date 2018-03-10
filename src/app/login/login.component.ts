import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessagingService } from '../messaging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""

  constructor(private ms: MessagingService, private ds: DataService, private router: Router) { }

  ngOnInit() {
    this.ms.initialize()
  }

  onLogin() {
    this.ms.getUserJwt(this.username).then(this.authenticate.bind(this))
  }

  onCreateUser() {
    this.ms.createUser(this.username).then(this.authenticate.bind(this))
  }

  authenticate(userJwt: string) {
    this.ms.client.login(userJwt).then(app => {
      this.ds.app = app
      this.router.navigate(['/conversations']);
    })
  }
}
