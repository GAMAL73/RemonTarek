import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomizComponent } from './roomiz.component';

describe('RoomizComponent', () => {
  let component: RoomizComponent;
  let fixture: ComponentFixture<RoomizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
