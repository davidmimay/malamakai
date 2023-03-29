import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {

  icon = 'brightness_4';

  constructor() {
    // Theme toggle
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const theme = localStorage.getItem('theme');
      if (theme) {
        document.body.classList.add(theme);
      }
    }
  }

  toggleTheme(): void {
    if (document.body.classList.contains('light')) {
      document.body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      this.icon = 'light_mode';
    } else if (document.body.classList.contains('dark')) {
      document.body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      this.icon = 'dark_mode';
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.icon = 'light_mode';
    }
  }

}
