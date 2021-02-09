import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresModifComponent } from './livres-modif.component';

describe('LivresModifComponent', () => {
  let component: LivresModifComponent;
  let fixture: ComponentFixture<LivresModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
