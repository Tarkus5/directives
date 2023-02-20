import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  showSecret = false;
  log: any = []; //Il compilatore di TS vuole il tipo any se non inizializzi un array tipizzato (se quindi non metti array di numeri, stringhe, etc...)


  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }


}


