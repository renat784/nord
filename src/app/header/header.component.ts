import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ip = 'UNKNOWN';
  isp = 'UNKNOWN';
  country = 'UNKNOWN';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public http: HttpClient) {

    iconRegistry.addSvgIcon(
      'nord-vpn',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/nordvpn-blue.svg'));

    iconRegistry.addSvgIcon(
      'nord-vpn-teams',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/nordvpn-teams.svg'));

    iconRegistry.addSvgIcon(
      'nord-pass',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/nordpass-green.svg'));

    iconRegistry.addSvgIcon(
      'nord-locker',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/nordlocker-48.svg'));
  }

  ngOnInit(): void {

    const ip = 'ip';
    const isp = 'isp';
    const location = 'location';
    const country = 'country';

    this.http.get('https://geo.ipify.org/api/v1?apiKey=at_iTgEkmGkhiwDRIeJPOvjIqFxgG9BC&ipAddress')
    .subscribe(data => {
      console.log(data);

      this.ip = data[ip];
      this.isp = data[isp];
      this.country = data[location][country];
    });
  }

  // opens external url in new browser tab
  goToUrl(url) {
    window.open(url, '_blank');
  }
}
