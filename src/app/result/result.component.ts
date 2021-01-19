import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ResultService]
})
export class ResultComponent implements OnInit {

  constructor(public resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResult();
  }

  

}
