import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandOptionComponent } from './command-option.component';

describe('CommandOptionComponent', () => {
  let component: CommandOptionComponent;
  let fixture: ComponentFixture<CommandOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
