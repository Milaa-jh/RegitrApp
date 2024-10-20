import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private router: Router) { }

  resetPassword() {
    
    console.log('Password reset requested for:', this.username);
    this.router.navigate(['/login']);
  }
}