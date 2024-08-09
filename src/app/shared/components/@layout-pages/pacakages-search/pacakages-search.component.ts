import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from '../../../../../services/http/http.service';
import { PackageSliderModalComponent } from '../../../../shared/sliders/package-slider-modal/package-slider-modal.component';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-pacakages-search',
  templateUrl: './pacakages-search.component.html',
  styleUrls: ['./pacakages-search.component.scss']
})
export class PacakagesSearchComponent implements OnInit {
  packages: any = [];
  selectedTabId: number = 0; // Initially select the first tab
  showAll: boolean = false;

  showAllTrips() {
    this.showAll = true;
  }
  constructor(
    private httpService: HttpService,
    public translate: TranslateService,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.httpService.get(environment.marsa, 'package').subscribe({
      next: (res: any) => {
        this.packages = res.Packeges;
        // console.log('package?.Trips.slice(0, 3)' , this.packages?.Trips.slice(0, 3));

      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  selectTab(index: number) {
    this.selectedTabId = index;
  }

  openPackModal(packageId: number) {
    const selectedPackage = this.packages.find((pkg: any) => pkg.id === packageId);
    const dialogRef = this.dialog.open(PackageSliderModalComponent, {
      width: '60%',
    });
    dialogRef.componentInstance.packages = selectedPackage ? selectedPackage.Trips : [];
  }



}
