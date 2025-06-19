import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDownComponent } from './zone-down.component';

describe('ZoneDownComponent', () => {
  let component: ZoneDownComponent;
  let fixture: ComponentFixture<ZoneDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
