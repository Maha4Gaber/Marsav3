import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from '../../../../core/services/http/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  destinations: any;
  slides: any = [];
  newSlides: any = [];
  isMobile = false;
  constructor(
    private httpService: HttpService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.isMobile = true;
    }
    this.httpService.get(environment.marsa, 'place').subscribe(
      (res: any) => {
        this.destinations = res.places;
        var size = 4;
        this.isMobile ? (size = 1) : (size = 4);
        for (var i = 0; i < this.destinations.length; i += size) {
          this.slides.push(this.destinations.slice(i, i + size));
        }
        console.log(this.slides);
        this.newSlides = this.removeByIndex(this.slides, 0);
        console.log(this.newSlides);
      },
      (err) => {}
    );
  }

  removeByIndex(array: any[], index: any) {
    return array.filter(function (el, i) {
      return index !== i;
    });
  }

  replaceSpace(url: any) {
    return url.replace(' ', '%20');
  }
}
