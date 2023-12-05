import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {

  @Input() list: [] = [];
  @Input() columns: [] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('list', this.list)
    console.log('columns', this.columns)
  }

  seeUserDetails(entityId: string) {
    this.router.navigate(['/user-profile', { entityId }])
  }

}
