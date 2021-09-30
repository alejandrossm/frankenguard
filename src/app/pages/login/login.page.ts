import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Usuario=
  {
    username:'',
    password:'',
    estado:0
  }

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.logear();
  }

  async logear()
  {
    //const name = await storage.get('name');
    let userok=await this.storage.get(this.usuario.username);
    if(userok!=null)
    {
      console.log("Usuario encontrado" + userok.username);
      await this.storage.remove(userok.username);
      userok.estado=1;
      await this.storage.set(userok.username,userok);
      
    }
    else
    {
      console.log("Usuario no encontrado");
    }

  }

  
}
