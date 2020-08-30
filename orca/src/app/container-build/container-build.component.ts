import { Component, OnInit } from '@angular/core';
import { CommandOption } from '../command-optioin';
import { BuildOrderService } from '../build-order.service';
@Component({
  selector: 'app-container-build',
  templateUrl: './container-build.component.html',
  styleUrls: ['./container-build.component.scss']
})
export class ContainerBuildComponent implements OnInit {

  constructor(
    private buildOrderService: BuildOrderService
  ) { }

  options: CommandOption[] = [];
  dockerFile: string = "";
  buildOutput: string = "";

  ngOnInit(): void {
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

  buildContainer(): void {
    console.log({
        dockerFile: this.dockerFile,
        commandOptions: this.options
      })
    this.buildOrderService.submitBuildOrder({
      dockerFile: this.dockerFile,
      commandOptions: this.options
    }).subscribe(
      res => {
        this.buildOutput = res.Message;
      }
    )
  }

}
