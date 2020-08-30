import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBuildComponent } from './container-build.component';

describe('ContainerBuildComponent', () => {
  let component: ContainerBuildComponent;
  let fixture: ComponentFixture<ContainerBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
