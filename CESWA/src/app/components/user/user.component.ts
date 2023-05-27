import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: UserModel[];
  status:boolean

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getAll();
  }

  setStatus(){
    
  }

  getAll() {
    this.userService.getAllUser().subscribe((next) => {
      (this.users = next.data), console.log(this.users);
    });
  }
}
