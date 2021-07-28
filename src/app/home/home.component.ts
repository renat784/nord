import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showCountdown = true;
  interval;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  // in seconds
  timeLeft = 30;

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;

        // more than 60 sec
        if (this.timeLeft > 60) {
          // more than 60 minutes
          if (this.timeLeft / 60 > 60) {
            // more than 24 hours
            if (this.timeLeft / (60 * 60) > 24) {
              this.days = this.getWholeNumber(this.timeLeft / (60 * 60 * 24));
              this.hours = this.getWholeNumber(
                (this.timeLeft - this.days * 60 * 60 * 24) / (60 * 60)
              );
              this.minutes = this.getWholeNumber(
                (this.timeLeft -
                  this.days * 60 * 60 * 24 -
                  this.hours * 60 * 60) /
                  60
              );
              this.seconds =
                this.timeLeft -
                this.days * 60 * 60 * 24 -
                this.hours * 60 * 60 -
                this.minutes * 60;

              // less than 24 hours
            } else {
              this.hours = this.getWholeNumber(this.timeLeft / (60 * 60));
              this.minutes = this.getWholeNumber(
                (this.timeLeft - this.hours * 60 * 60) / 60
              );
              this.seconds =
                this.timeLeft - this.hours * 60 * 60 - this.minutes * 60;
            }
          }
          // less than 60 minutes
          else {
            this.minutes = this.getWholeNumber(this.timeLeft / 60);
            this.seconds = this.timeLeft - this.minutes * 60;
          }

          // less than 60 sec
        } else {
          this.seconds = this.timeLeft;
        }
      } else {
        this.pauseTimer();
        this.showCountdown = false;
      }
    }, 1000);
  }

  //  returns whole number, for example 2.14 returns 2
  getWholeNumber(val) {
    // tslint:disable-next-line: radix
    return parseInt(val.toString().split('.')[0]);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
