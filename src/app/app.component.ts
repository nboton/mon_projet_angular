import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',//Nom de la balise à uttiliser pour afficher le component app.component.html. Ce nom doit être uniq
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  
  secondes: number;
  counterSubscription: Subscription = new Subscription;
  
  constructor() {
    this.secondes=0;
   }

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }


  
}
