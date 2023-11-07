import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../../models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user!: User;
  loginForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private router: Router,  
    private userService: UserService
  ) {}

  ngOnInit() {        
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async onSubmitLogin() {
    if (
      this.loginForm.controls['email'].value === null ||
      this.loginForm.controls['password'].value === null
    ) {
      return this.presentToast('Los campos email y contaseña son requeridos');
    } else {
      this.user = {
        email:this.loginForm.controls['email'].value,
        password:this.loginForm.controls['password'].value
      }
      
      this.userService
        .login(this.user)
        .subscribe((data) => {
          if (data) {
            console.log("entro",data)
            this.router.navigate(['/home'], { replaceUrl: true });
          }
        });
    }
  }
}
