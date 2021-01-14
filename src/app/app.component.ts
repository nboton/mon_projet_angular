import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Nom de la balise à uttiliser pour afficher le component app.component.html. Ce nom doit être uniq
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
}
