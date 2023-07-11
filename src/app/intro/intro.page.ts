import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  slides = [
    {
      tittle:"GATOS",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "slide-icon",
     
      description :"Hola soy la explicacion de slide 1 Hola soy la explicacion de slide"
    },
  
    {
      tittle:"PERROS",
      img: "assets/images/perrito.jpg",
      icon: "slide-icon",
      
      description :"Hola soy la explicacion de slide 2 Hola soy la explicacion de slide"
    },
  
    {
      tittle:"CONEJOS",
      img: "https://www.zotal.com/wp-content/uploads/2019/11/conejitocomomascota.jpg",
      icon: "slide-icon",
     
      description :"Hola soy la explicacion de slide 3 Hola soy la explicacion de slide"
    },
    {
      tittle:"PECES",
      img: "https://www.anipedia.net/imagenes/peces-800x375.jpg",
      icon: "slide-icon",
   
      description :"Hola soy la explicacion de slide 4 Hola soy la explicacion de slide"
    },
  
    {
      tittle:"CUYS",
      img: "https://cdn.www.gob.pe/uploads/document/file/305071/standard_cuy.jpg",
      icon: "slide-icon",
     
      description :"Hola soy la explicacion de slide 5 Hola soy la explicacion de slide"
    }
  
   ]
  


   constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }


  finish(){
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/home");
    console.log("salir")
  }

}
