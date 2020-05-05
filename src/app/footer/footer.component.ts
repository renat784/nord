import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  selected = 'English';

  languages = [
    'English',
    'Spanish',
    'Ukrainian',
    'Russian',
    'Italiano'
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'google-play',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/google-play.svg'));

    iconRegistry.addSvgIcon(
      'app-store',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/app-store.svg'));

    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/facebook.svg'));

    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/twitter.svg'));

    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/instagram.svg'));

    iconRegistry.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/youtube.svg'));
  }


  ngOnInit(): void {
  }
}
