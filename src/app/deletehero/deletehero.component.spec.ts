import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteheroComponent } from './deletehero.component';

describe('DeleteheroComponent', () => {
  let component: DeleteheroComponent;
  let fixture: ComponentFixture<DeleteheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
