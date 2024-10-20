import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (this._storage === null) {
      const storage = await this.storage.create();
      this._storage = storage;
    }
  }

  public async setCredentials(username: string, password: string) {
    await this.init();
    await this._storage?.set(username, password);
  }

  public async validateCredentials(username: string, password: string): Promise<boolean> {
    await this.init();
    const storedPassword = await this._storage?.get(username);
    return storedPassword === password;
  }

  public async userExists(username: string): Promise<boolean> {
    await this.init();
    const storedPassword = await this._storage?.get(username);
    return !!storedPassword;
  }

  public async loginOrRegister(username: string, password: string): Promise<boolean> {
    await this.init();
    const userExists = await this.userExists(username);
    
    if (userExists) {
      return this.validateCredentials(username, password);
    } else {
      await this.setCredentials(username, password);
      return true;
    }
  }

  // Nuevo método para obtener todos los elementos
  public async getAllItems(): Promise<{key: string, value: any}[]> {
    await this.init();
    const items: {key: string, value: any}[] = [];
    await this._storage?.forEach((value: any, key: string) => {
      items.push({key, value});
    });
    return items;
  }
}