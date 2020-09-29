import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm){
    this.authService.register(this.model).subscribe(() => {
      alert("Registration Successful");
      registerForm.reset();
    }, error => {
      alert(error.error);
      console.log(error);
    })
  }

  onCancel(){
    this.cancelRegister.emit();
    console.log("Cancelled");
  }

}
