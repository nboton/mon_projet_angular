import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',//Nom de la balise à uttiliser pour afficher le component app.component.html. Ce nom doit être uniq
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mon-projet-angular';
  isAuth = false;
  
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  
  appareils: any[]=[];

  constructor(private appareilService: AppareilService) {
    this.appareils=[];
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;

  }


  onAllumer() {
    this.appareilService.switchOnAll();
}
  onEteindre() {
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilService.switchOffAll();
  } else {
   // return null;
  }
}

  
}
