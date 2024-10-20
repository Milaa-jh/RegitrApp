import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular'; // Importamos AlertController
import { FormsModule } from '@angular/forms';
import { DbService } from '../services/db.service'; // Importamos el servicio DbService

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.page.html',
  styleUrls: ['./teacher-login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class TeacherLoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private dbService: DbService,    // Inyectamos el servicio DbService
    private alertController: AlertController  // Inyectamos el AlertController para mostrar mensajes
  ) {}

  // Método de login con registro automático si el usuario no existe
  async login() {
    const userExists = await this.dbService.userExists(this.username);
    
    if (userExists) {
      // Si el usuario ya está registrado, validar credenciales
      const isValid = await this.dbService.validateCredentials(this.username, this.password);
      if (isValid) {
        // Si las credenciales son válidas, redirigir al dashboard
        console.log('Teacher login exitoso');
        this.router.navigate(['/teacher-dashboard']);
      } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Contraseña incorrecta.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      // Si el usuario no existe, registrar al usuario
      await this.dbService.setCredentials(this.username, this.password);
      console.log('Usuario registrado exitosamente');
      this.router.navigate(['/teacher-dashboard']);
    }
  }
}
