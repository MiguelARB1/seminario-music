import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  validate_message = {
    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "Debe ingresar un email válido" }
    ],
    password: [
      { type: "required", message: "El password es obligatorio" },
      { type: "minLength", message: "Debe tener al menos 6 caracteres" },
      { type: "maxLength", message: "Demasiados caracteres para la contraseña" }
    ]
  };
  errorMessage: string ='';
  constructor(
    private formBuilder: FormBuilder , 
    private authService:AuthenticateService,
    private navCtrl:NavController,
    private storage:Storage
    ) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$"),
          Validators.minLength(10)
        ])
      ),
      password:new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])
      )
    })
  }

  ngOnInit() {
  }

  loginUser(credentials:any){
    console.log(credentials);
    this.authService.loginUser(credentials).then(res =>{
      this.errorMessage ="";
      this.storage.set("isUserLoggedIn",true)
      this.navCtrl.navigateForward("/home");

    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
    })
    
  }


  goToRegister(){
    this.navCtrl.navigateForward("/register");
  }

}
