import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pepijn Fijt | Portfolio | Software developer | Rotterdam';

  showVideo(): boolean {
    return window.screen.width > 1200;
  }

  vh(v: number): number {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  vw(v: number): number {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  changeNavigationStyle(addClass: string, removeClass?: string): void {
    document.querySelectorAll('.navigation-bar-element').forEach(navElement => {
      navElement.classList.add(addClass);
      if (removeClass) {
        navElement.classList.remove(removeClass);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  changeNavigationStyleEvent(event): void {
    if (window.pageYOffset > this.vh(76)) {
      this.changeNavigationStyle('text-dark', 'text-light');
      document.getElementById('navigation-bar').classList.add('bg-light');
    } else {
      this.changeNavigationStyle('text-light', 'text-dark');
      document.getElementById('navigation-bar').classList.remove('bg-light');
    }
  }
}
