import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurewsComponent } from './purews.component';

describe('PurewsComponent', () => {
  let component: PurewsComponent;
  let fixture: ComponentFixture<PurewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
