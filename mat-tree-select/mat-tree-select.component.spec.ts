import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeSelectComponent } from './mat-tree-select.component';

describe('MatTreeSelectComponent', () => {
  let component: MatTreeSelectComponent;
  let fixture: ComponentFixture<MatTreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
