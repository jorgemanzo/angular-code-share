import { Component, OnInit } from '@angular/core';
import { ContainerStatusService } from '../container-status.service'
import { ContainerStatus } from '../container-status'
@Component({
  selector: 'app-container-status',
  templateUrl: './container-status.component.html',
  styleUrls: ['./container-status.component.scss']
})
export class ContainerStatusComponent implements OnInit {

  constructor(
    private containerStatusService: ContainerStatusService
  ) { }

  ngOnInit(): void {
    this.containerStatusService.getStatusForAll().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
