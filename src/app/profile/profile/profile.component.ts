import { Component } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { UserDto } from '@app/_models/userDto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  loading = false;
  user: UserDto;

  constructor(private userService: UserService) {
    this.user = new UserDto();
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().subscribe((user) => {
      this.loading = false;
      this.user = user;
    });
  }
}
