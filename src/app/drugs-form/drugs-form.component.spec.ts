import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsFormComponent } from './drugs-form.component';

describe('DrugsFormComponent', () => {
  let component: DrugsFormComponent;
  let fixture: ComponentFixture<DrugsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
