import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePageItoComponent } from './image-page-ito.component';

describe('ImagePageItoComponent', () => {
  let component: ImagePageItoComponent;
  let fixture: ComponentFixture<ImagePageItoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePageItoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePageItoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
