import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import {map } from 'rxjs/operators';
@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent implements OnInit {
contents$= this.api.getContents().pipe(
map((res: any) => Object.keys(res).map(key => (
  {key:key, value: res[key]}
)))
)
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

}
