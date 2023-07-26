import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  
  validateMessage = {
    email: [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'pattern', message: 'Debe ingresar un email válido' }
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres' }
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatorio' },
      { type: 'minlength', message: 'El nombre debe tener al menos 6 caracteres' }
    ],
    last_name: [
      { type: 'required', message: 'El apellido es obligatorio' },
      { type: 'minlength', message: 'El apellido debe tener al menos 6 caracteres' }
    ]
  };

  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$')
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      last_name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() {
  }



  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
  
  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).subscribe(res => {
      console.log(res)
      this.navCtrl.navigateBack("/login");
    })
  }
  
}
