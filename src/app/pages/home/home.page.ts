import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) { }

  cambiarEstado()
  {
    this.cambiar();
  }
  
  async cambiar() {
    let user = await this.storage.get('wacoldo');
    if (user.estado === 0) {
      user.estado = 1;
    }
    else {
      user.estado = 0;
    }
    await this.storage.set('wacoldo', user);
  }

}
