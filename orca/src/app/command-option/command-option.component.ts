import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommandOption } from '../command-optioin';

@Component({
  selector: 'app-command-option',
  templateUrl: './command-option.component.html',
  styleUrls: ['./command-option.component.scss']
})
export class CommandOptionComponent implements OnInit {

  constructor() { }

  options: CommandOption[] = [];

  @Output() commandOptionsEvent = new EventEmitter<CommandOption[]>();

  onBlur(): void {
    this.commandOptionsEvent.emit(this.options);
  }

  addCommandOption(): void {
    this.options.push({
      ID: -1,
      parameter: "",
      value: ""
    })
    this.options.map((option,index) => option.ID = index)
  }

  removeCommandOption(IDToRemove: number): void {
    this.options = this.options.filter(option => option.ID != IDToRemove)
    this.options.map((option,index) => option.ID = index)
  }

  ngOnInit(): void {
  }

}
