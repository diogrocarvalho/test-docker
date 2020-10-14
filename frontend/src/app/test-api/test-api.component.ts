import {Component, OnInit} from '@angular/core';
import {TestApiServiceService} from "../test-api-service.service";

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {
  data: any[];

  constructor(private api: TestApiServiceService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe(resp => {
      console.log('resp', resp);
      this.data = resp;
    })
  }

}
