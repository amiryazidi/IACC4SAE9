import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login= new FormControl('Amir', [Validators.required,Validators.minLength(6)])
  pwd= new FormControl('', Validators.required)
  email= new FormControl('', [Validators.required, Validators.email])
  telephone = new FormControl('',Validators.required)


  formLogin = new FormGroup({
  login: new FormControl('', [Validators.required,Validators.minLength(6)]),
  pwd: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  telephone : new FormControl('',[Validators.required, Validators.pattern('^[0-9]{8}')])
  })



}
