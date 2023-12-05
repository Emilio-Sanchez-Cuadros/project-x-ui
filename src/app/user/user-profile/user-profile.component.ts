import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  user: User;
  userForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.userService.getUserById(param.userId).subscribe(user => {
        this.user = user;
        this.userForm = this.fb.group({
          createdAt: [new Date(this.user.createdAt).toISOString().split('T')[0] || new Date()],
          username: [this.user.username || ''],
          email: [this.user.email || ''],
          password: [this.user.password || ''],
          role: [this.user.role || ''],
          status: [this.user.status || ''],
        })
        console.log('this.userForm.value', this.userForm.value);
      });

    })
  }

}
