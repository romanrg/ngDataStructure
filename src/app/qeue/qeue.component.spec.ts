import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QeueComponent } from './qeue.component';

describe('QeueComponent', () => {
  let component: QeueComponent;
  let fixture: ComponentFixture<QeueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QeueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
