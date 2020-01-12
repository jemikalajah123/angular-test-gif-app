import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  results: any;
  constructor(private api: ApiService, private global: GlobalService, private router: Router) {
  }

  ngOnInit() {
  }

  imageDetails(data) {
    let detail = {
      name: data.title,
      rating: data.rating,
      url: data.images.original.url,
      id: data.id
    }
    this.global.showList = false;
    this.router.navigate(['gif-details', detail]);
  }

}