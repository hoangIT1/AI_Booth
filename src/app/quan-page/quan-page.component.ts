import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quan-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quan-page.component.html',
  styleUrl: './quan-page.component.css',
})
export class QuanPageComponent {
  isLoading = false;

  buttons = [
    'CIO Office',
    'DE',
    'SPT',
    'RBT',
    'CBT',
    'ITA & PCM',
    'EAT',
    'ITS',
    'QE',
    'ITO',
  ];
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back(); // Quay lại trang trước đó
  }

  navigateToPage(buttonIndex: number) {
    if (buttonIndex < 9) {
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['/image-page', buttonIndex]);
        this.isLoading = false;
      }, 20000)
      console.log(buttonIndex);
    } else {
      this.router.navigate(['/image-page-ito'])
    }
  }
}
