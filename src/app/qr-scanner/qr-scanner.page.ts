import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class QrScannerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scanQR() {
    console.log('Redirecting to 404 page');
    this.router.navigate(['/not-found']);
  }
}