import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

/*describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe('Test for LoginPage', () => {
  let fixture: ComponentFixture<LoginPage>;
      fixture = TestBed.createComponent(LoginPage);
      const app = fixture.componentInstance;

  describe('Test for loginPage.initLoginForm()', () => {
    beforeEach(waitForAsync(() => {
      it("should return a FormGroup with validation rules", ()=>{  
        const formGroup = app.initLoginForm(); 
        expect(formGroup).toBeTruthy();
      })
    }))
  });

  describe('Test for loginPage.onLogin()', () => {
    beforeEach(waitForAsync(() => {
      it("should navigate to home if validation is OK", ()=>{
        app.loginForm.value.email = 'test@email.com';
        app.loginForm.value.password = 'password';
        expect(app.onLogin()).toBeTruthy();
      })
    }))
  });
});
