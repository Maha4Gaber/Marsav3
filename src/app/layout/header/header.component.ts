import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment.prod';
import { AuthService } from '../../../services/auth.service';
import { HeaderService } from '../../../services/header.service';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() background: string = '';
  selectedLang = '';
  showForm: boolean = true;
  isLogin: boolean = false;
  userDate: any;
  social: any;
  constructor(
    private _AuthService: AuthService,
    private langService: LanguageService,
    public translate: TranslateService,
    private headerService: HeaderService,
    private httpService: HttpService
  ) {
    this.langService.getCurrentLang().subscribe((lang) => {
      this.selectedLang = lang;
    });
  }
  ngOnInit(): void {
    this._AuthService.$isAuthenticated.subscribe((isAuth: any) => {
      this.isLogin = isAuth;
    });
    this._AuthService.getUserData().subscribe(
      (data: any) => {
        this.userDate = JSON.parse(data); // Assigning the received object directly
      },
      (error) => {
        // Handle error if needed
        console.error('Error:', error);
      }
    );
    this.headerService.toggleDropdown$.subscribe(() => {
      this.toggleDropdown();
    });

    this.httpService
      .get(environment.marsa, 'Background')
      .subscribe((res: any) => {
        this.social = res?.social;
      });
  }
  public languageOptions = [
    { value: 'en', label: 'English', flag: 'en.webp' },
    { value: 'rs', label: 'Русский', flag: 'rs.webp' },
    { value: 'cez', label: 'Čeština', flag: 'cez.webp' },
    { value: 'du', label: 'Deutsch', flag: 'du.webp' },
  ];
  registerBehavoiur: string = 'login';
  signClick: boolean = false;
  @HostListener('document:click', ['$event'])
  OnClickSignIn(event: any) {
    if (event.target.matches('.signUpDropdownInvoker')) {
      this.signClick = !this.signClick;
    }
  }
  toggleDropdown() {
    this.signClick = !this.signClick;
  }
  changeLang() {
    this.langService.setCurrentLang(this.selectedLang);
  }
  toggleLoginForm() {
    this.signClick = !this.signClick;
  }
  callLogout(): void {
    this._AuthService.logout();
  }

  call(option: any) {
    if (option == 'call') window.open('tel:' + this.social.Call, '_blank');
    else window.open('mailto:' + this.social.Mail, '_blank');
  }
}
