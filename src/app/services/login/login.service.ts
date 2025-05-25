import { Injectable } from '@angular/core';
import { DbinprojectService } from '../dataBase/dbinproject.service';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private storage : StorageService,
    private dbSer : DbinprojectService,

  ) { }

  login(user:string,pass:string){
    var caluser=this.dbSer.getuser();
    const founduser = caluser.find(item => item.Username == user && item.Password == pass);
    if(founduser){
      this.storage.setItem('userName',founduser.Name);
      this.dbSer.setNameUser(founduser.Name);
      this.storage.setItem('UserName',founduser.Username);
      this.storage.setItem('PassWord',founduser.Password);
      this.storage.setItem('Obj_Opt',founduser.Cost);
      return founduser.Name;
    }else{
      return '';
    }
    
  }


}
