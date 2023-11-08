import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  usersList: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      console.log('ngOnInit()', res);
      this.usersList = res;
    })
  }

  seeUserDetails(userId: any) {
    this.router.navigate(['/user-profile', { userId }])
  }

}
