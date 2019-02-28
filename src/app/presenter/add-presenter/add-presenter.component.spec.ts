import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPresenterComponent } from './add-presenter.component';

describe('AddPresenterComponent', () => {
  let component: AddPresenterComponent;
  let fixture: ComponentFixture<AddPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
