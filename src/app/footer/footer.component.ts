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
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/google-play.svg'));

    iconRegistry.addSvgIcon(
      'app-store',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/app-store.svg'));

    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/facebook.svg'));

    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/twitter.svg'));

    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/instagram.svg'));

    iconRegistry.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl('assets/Images/youtube.svg'));
  }


  ngOnInit(): void {
  }
}
