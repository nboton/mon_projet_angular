import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;
  appareils:any [];

  constructor(private appareilService: AppareilService) { 
  this.appareils=[];
  this.appareilName="";
  this.appareilStatus="";
  this.indexOfAppareil=0;
  this.id=1;
  


  }

  ngOnInit() {
    this.appareils=this.appareilService.appareils;

  }

  getStatus() {
    return this.appareilStatus;
  }

/**
 * Permet de mettre la couleur en fonction de l'état d'un appareil
 */
getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
    return "";
}
onSwitch() {
  if(this.appareilStatus === 'allumé') {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  } else if(this.appareilStatus === 'éteint') {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
}



}
