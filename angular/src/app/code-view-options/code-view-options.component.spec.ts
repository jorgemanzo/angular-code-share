import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeViewOptionsComponent } from './code-view-options.component';

describe('CodeViewOptionsComponent', () => {
  let component: CodeViewOptionsComponent;
  let fixture: ComponentFixture<CodeViewOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeViewOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeViewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
