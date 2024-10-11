import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyaPageComponent } from './tuya-page.component';

describe('TuyaPageComponent', () => {
  let component: TuyaPageComponent;
  let fixture: ComponentFixture<TuyaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuyaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuyaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
