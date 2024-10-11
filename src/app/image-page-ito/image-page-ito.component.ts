import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-page-ito',
  standalone: true,
  templateUrl: './image-page-ito.component.html',
  styleUrls: ['./image-page-ito.component.css'],
})
export class ImagePageItoComponent implements OnInit {
  imageSrcLeft: string = '';
  imageSrcRight: string = '';

  folderImagesCount: { [key: string]: number } = {
    '9': 8,
    '10': 6
  };

  constructor(private location: Location, private route: ActivatedRoute) {}

  goBack() {
    this.location.back(); // Quay lại trang trước đó
  }

  ngOnInit() {
    const folderIndexLeft = '9';
    const folderIndexRight = '10';
    
    if (folderIndexLeft && folderIndexRight) {
      this.loadRandomImages(folderIndexLeft, folderIndexRight);
    }
  }

  loadRandomImages(folderIndexLeft: string, folderIndexRight: string) {
    const imageCountLeft = this.folderImagesCount[folderIndexLeft];
    const imageCountRight = this.folderImagesCount[folderIndexRight];

    if (imageCountLeft && imageCountRight) {
      const folderLeft = `../../../assets/AI_Image/${folderIndexLeft}`;
      const folderRight = `../../../assets/AI_Image/${folderIndexRight}`;

      const imageNumberLeft = Math.floor(Math.random() * imageCountLeft);
      const imageNumberRight = Math.floor(Math.random() * imageCountRight);

      this.imageSrcLeft = `${folderLeft}/image${imageNumberLeft}.jpg`; 
      this.imageSrcRight = `${folderRight}/image${imageNumberRight}.jpg`;
    }
  }
}
