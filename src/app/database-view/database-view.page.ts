import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-database-view',
  templateUrl: './database-view.page.html',
  styleUrls: ['./database-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DatabaseViewPage implements OnInit {
  databaseItems: {key: string, value: any}[] = [];
  searchTerm: string = '';

  constructor(private dbService: DbService) {}

  async ngOnInit() {
    await this.loadDatabaseItems();
  }

  async loadDatabaseItems() {
    this.databaseItems = await this.dbService.getAllItems();
  }

  filterItems() {
    if (this.searchTerm === '') {
      return this.databaseItems;
    }
    return this.databaseItems.filter(item => 
      item.key.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      JSON.stringify(item.value).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}