import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMainComponent } from './image-main.component';

describe('ImageMainComponent', () => {
  let component: ImageMainComponent;
  let fixture: ComponentFixture<ImageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
