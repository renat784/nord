import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'nord-vpn',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/nordvpn-blue.svg'));

    iconRegistry.addSvgIcon(
      'nord-vpn-teams',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/nordvpn-teams.svg'));

    iconRegistry.addSvgIcon(
      'nord-pass',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/nordpass-green.svg'));

    iconRegistry.addSvgIcon(
      'nord-locker',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/nordlocker-48.svg'));

  }

  ngOnInit(): void {
  }

  // opens external url in new browser tab
  goToUrl(url){
    window.open(url, '_blank');
  }
}
