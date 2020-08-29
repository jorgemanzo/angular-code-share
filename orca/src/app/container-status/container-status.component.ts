import { Component, OnInit } from '@angular/core';
import { ContainerStatusService } from '../container-status.service'
import { ContainerStatus } from '../container-status'

@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.scss']
})
export class ContainerStatusComponent implements OnInit {

  public statusCards: ContainerStatus[] = [];
  constructor(
    private containerStatusService: ContainerStatusService
  ) { }

  ngOnInit(): void {
    this.getContainers()
  }

  getContainers(): void {
    this.statusCards = [];
    this.containerStatusService.getStatusForAll().subscribe(
      res => {
        res.map(status => this.statusCards.push(status))
      }
    )
  }

  handleStop(id: string): void {
    this.containerStatusService.stopComponentByID(id).subscribe(
      res => {
        if(res) {
          console.log(res.OK)
          this.getContainers();
        }
      }
    )
  }
}
