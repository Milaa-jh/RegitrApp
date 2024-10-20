import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
  standalone: true,
  imports: [IonicModule, QRCodeModule]
})
export class QrGeneratorPage implements OnInit {
  qrData: string = '';

  constructor() { }

  ngOnInit() {
    // genera codigo clase
    this.qrData = 'CLASS_' + Date.now().toString();
  }
}