import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.page.html',
  styleUrls: ['./user-selection.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class UserSelectionPage {

  constructor(private router: Router) { }

  selectUserType(userType: string) {
    if (userType === 'student') {
      this.router.navigate(['/login']);
    } else if (userType === 'teacher') {
      this.router.navigate(['/teacher-login']);
    }
  }
  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}