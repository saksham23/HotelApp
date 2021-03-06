import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

}
