import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelVisionComponent } from './appel-vision.component';

describe('AppelVisionComponent', () => {
  let component: AppelVisionComponent;
  let fixture: ComponentFixture<AppelVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppelVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppelVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
