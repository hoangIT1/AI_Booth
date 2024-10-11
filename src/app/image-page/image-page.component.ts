import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-page',
  standalone: true,
  imports: [],
  templateUrl: './image-page.component.html',
  styleUrl: './image-page.component.css',
})
export class ImagePageComponent implements OnInit {
  constructor(private location: Location, private route: ActivatedRoute) {}
  goBack() {
    this.location.back(); // Quay lại trang trước đó
  }

  imageSrc: string = '';

  folderImagesCount: { [key: string]: number } = {
    '0': 8,  // Folder 0 có 8 ảnh
    '1': 8,  
    '2': 8,  
    '3': 7, 
    '4': 6,
    '5': 7,
    '6': 7,
    '7': 7,
    '8': 11,
    '9': 8,
    '10': 6
  };

  ngOnInit() {
    const buttonIndex = this.route.snapshot.paramMap.get('id'); // Lấy `id` từ URL
    console.log(buttonIndex);
    if (buttonIndex) {
      this.loadRandomImage(buttonIndex);
    }
  }

  loadRandomImage(folderIndex: string) {
    const imageCount = this.folderImagesCount[folderIndex];
    if (imageCount) {
        const folder = `../../../assets/AI_Image/${folderIndex}`;
        console.log("foler", folder);
        const imageNumber = Math.floor(Math.random() * imageCount);
        console.log("imageNumber", imageNumber);
        this.imageSrc = `${folder}/image${imageNumber}.jpg`; // Random ảnh từ folder
        console.log("imageSrc", this.imageSrc)
    }
  }
}
