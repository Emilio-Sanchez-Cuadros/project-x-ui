import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class TableListComponent implements OnInit {

  usersList: User[] = [];
  columns = ['Id', 'Username', 'Country', 'City', 'Salary']

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.usersList = res;
      let otherUsers = [...this.usersList];
      otherUsers.pop();
      console.log('this.usersList', this.usersList);
      console.log('otherUsers', otherUsers);

    })
  }

  seeUserDetails(userId: any) {
    this.router.navigate(['/user-profile', { userId }])
  }

}
