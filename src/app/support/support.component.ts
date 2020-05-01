import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  searchWord = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    console.log('your data = ' + this.searchWord);
  }
}
