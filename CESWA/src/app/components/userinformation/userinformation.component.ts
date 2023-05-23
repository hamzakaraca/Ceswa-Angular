import { Component, OnInit } from '@angular/core';
import { IndividualUserModel } from 'src/app/models/individualUserModel';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css'],
})
export class UserinformationComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getCurrentUser();
  }
  currentUser: UserModel;
  async getCurrentUser() {
    this.currentUser = await this.userService.getCurrentUser();
  }
}
