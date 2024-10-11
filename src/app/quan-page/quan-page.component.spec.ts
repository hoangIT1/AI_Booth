import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanPageComponent } from './quan-page.component';

describe('QuanPageComponent', () => {
  let component: QuanPageComponent;
  let fixture: ComponentFixture<QuanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
