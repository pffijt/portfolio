import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  showVideo(): boolean {
    console.log(window.screen.width > 1200);
    return window.screen.width > 1200;
  }
}
