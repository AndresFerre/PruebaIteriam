import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private navCtrl:NavController,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController
  ) { }

  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.initLoginForm();
  }

  initLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      remember: new FormControl()
    });
  }

  onLogin() {
    console.log(this.loginForm.value);

    if(!this.loginForm.valid){
      console.log('El formulario tiene errores de validación');
    }
    else
    {
      console.log('Validación OK');
      this.presentLoading();
      this.navCtrl.navigateRoot('home');
      //No he entrado en aspectos como el inicio de sesión como tal ya así lo dice el punto 3 del enunciado
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Sesión iniciada!');
  }

  validateEmailField() {
    return !this.loginForm.controls.email.valid &&
            this.loginForm.controls.email.dirty
  }

  validatePasswordField() {
    return !this.loginForm.controls.password.valid &&
            this.loginForm.controls.password.dirty
  }

  //Otra alternativa más escalable sería:
  /*validateField(field) {
    switch(field){
      case 'email':
        return !this.loginForm.controls.email.valid &&
            this.loginForm.controls.email.dirty
      break;
      case 'password':
        return !this.loginForm.controls.password.valid &&
            this.loginForm.controls.password.dirty
      break;
    }
  }*/
}
