import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email!: string;
  password!: string;
  typePassword = 'password';
  registerForm!: FormGroup;
  usuario!: User;
  
  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private userService:UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: ['', Validators.required],
      emailNew: ['', Validators.required],
      password: ['', Validators.required],
      passwordNew: ['', Validators.required],      
    });


  }

  async OnSubmitRegister() {
    this.usuario = {
      name:this.registerForm.controls['email'].value,
      email:this.registerForm.controls['email'].value,
      password:this.registerForm.controls['password'].value,
      status:true, 
      role:'USER'   
    };

    if (this.registerForm.value.name) {
      if (this.registerForm.value.email === this.registerForm.value.emailNew) {
        if (
          this.registerForm.value.password ===
          this.registerForm.value.passwordNew
        ) {
          
          await this.userService.register(this.usuario).subscribe((user) => {

              this.presentToast(
                'Felicitaciones !!! , te has registrado como usuario'
              );

              this.router.navigate(['/login'], { replaceUrl: true });
            
          });
        } else {
          this.presentToast('las contraseñas son diferentes');
        }
      } else {
        this.presentToast('los email son diferentes');
      }
    } else {
      this.presentToast('el nombre es obligatorio');
    }
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }

  viewPassword(type:string) {
    this.typePassword = type;
  }
}
