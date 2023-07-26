import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';import { UserService } from '../services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  userImage = "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-login-interface-abstract-blue-icon-png-image_3917504.jpg";
  photo:any;
  userInfo:any;
  
  constructor(
    private userService: UserService,
    private storage:Storage
    ) { }

    async ionViewDidEnter() {
     
      this.userService.getUser().then(userData => {
        console.log("userData",userData);
        this.userInfo = userData;
        this.photo = userData.image;

      })
    }
    async takePhoto(){
      try {
        const image = await Camera.getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera
        })
        this.photo = image.dataUrl;
        console.log(image.dataUrl)
        this.userService.updateUser({"image": this.photo}).then((res: any) => {
          console.log(res)
        })
      }
      catch (error){
        console.log("No se selecciono foto")
      }
  
    }
}
