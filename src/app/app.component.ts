import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pepijn Fijt | Portfolio | Software developer | Rotterdam';

  showVideo = (): boolean => window.screen.width > 1200;

  vh = (v: number): number => {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  vw = (v: number): number => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  @HostListener('window:scroll', ['$event'])
  changeNavigationStyleEvent = (event): void => {
    if (window.pageYOffset > this.vh(76)) {
      document.getElementById('navigation-bar').classList.add('bg-nice-dark');
    } else {
      document.getElementById('navigation-bar').classList.remove('bg-nice-dark');
    }
  }
}
