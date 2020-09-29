import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};
  
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Succesfully');
      loginForm.reset();
      this.router.navigate(['/hotel']);
    }, error => {
      alert('Wrong email or password. Try again!!');
    });
  }

  onLogout(){
    localStorage.removeItem('token');
    console.log('logged out');
    this.router.navigate(['/home']);
  }


  loggedIn(){
    return this.authService.loggedIn();
  }

}
