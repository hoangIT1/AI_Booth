import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private router: Router) {}

  navigateToAppTuya() {
    this.router.navigate(['/appTuya']); // Điều hướng tới màn hình hiện tại
  }

  navigateToAppQuan() {
    this.router.navigate(['/appQuan']);
  }
}
