import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyjobComponent } from './getbyjob.component';

describe('GetbyjobComponent', () => {
  let component: GetbyjobComponent;
  let fixture: ComponentFixture<GetbyjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbyjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbyjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
