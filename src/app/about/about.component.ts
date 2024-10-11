import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log('params received via if => ', params);
    });
    this.activatedRoute.queryParams.subscribe(queryparams => {
      console.log('query params received => ', queryparams);
    });
  }
}
