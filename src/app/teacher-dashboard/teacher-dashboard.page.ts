import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.page.html',
  styleUrls: ['./teacher-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TeacherDashboardPage implements OnInit {
  teacherName: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.teacherName = 'Profesor';
  }

  generateQR() {
    this.router.navigate(['/qr-generator']);
  }
}