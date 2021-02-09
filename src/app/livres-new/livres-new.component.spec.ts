import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresNewComponent } from './livres-new.component';

describe('LivresNewComponent', () => {
  let component: LivresNewComponent;
  let fixture: ComponentFixture<LivresNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
