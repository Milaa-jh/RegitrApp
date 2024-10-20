import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private dbService: DbService,
    private alertController: AlertController
  ) { }

  async login() {
    const success = await this.dbService.loginOrRegister(this.username, this.password);
    
    if (success) {
      console.log('Student login o registro exitoso');
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Contraseña incorrecta.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}