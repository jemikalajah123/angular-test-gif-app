import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.css']
})
export class GifDetailsComponent implements OnInit {
  details: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.details = params;
    });
  }

  ngOnInit() {
  }

}
