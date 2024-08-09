import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marsa-project';
  constructor(
    private langServ: LanguageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.langServ.setCurrentLang(lang, true);
    } else {
      this.langServ.setCurrentLang('en', true);
    }
    this.authService.autoAuth();
  }
}
