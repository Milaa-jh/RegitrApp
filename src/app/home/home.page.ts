import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class HomePage implements OnInit {
  username: string = '';

  constructor() { }

  ngOnInit() {
    // In a real app, you would get the username from a service or storage
    this.username = 'Student';
  }
}