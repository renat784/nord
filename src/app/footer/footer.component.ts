import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'google-play',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/google-play.svg'));

    iconRegistry.addSvgIcon(
      'app-store',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/app-store.svg'));
    }

  ngOnInit(): void {
  }

}
