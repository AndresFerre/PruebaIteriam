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
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      remember: new FormControl()
    });
  }

  onLogin() {
    console.log(this.loginForm.value);
    // Utilizo esta forma de validar ya que en el enunciado dice que se mantenga habilitado en todo momento 
    // el botón de acceder, si no dijera eso utilizaría la aproximación de deshabilitar el botón siempre y cuando no se cumpla la validación del formGroup
    if(this.loginForm.value.email == '' 
    || this.loginForm.value.email == undefined 
    || this.loginForm.value.email == null) {
      console.log('El email debe tener un valor');    
    }

    if(this.loginForm.value.password == '' 
    || this.loginForm.value.password == undefined 
    || this.loginForm.value.password == null
    ||this.loginForm.value.password.length < 5) {
      console.log('La contraseña debe tener valor y más de 5 dígitos');    
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
}
