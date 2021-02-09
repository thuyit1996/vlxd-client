import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsableTableComponent } from './usable-table.component';

describe('UsableTableComponent', () => {
  let component: UsableTableComponent;
  let fixture: ComponentFixture<UsableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsableTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
