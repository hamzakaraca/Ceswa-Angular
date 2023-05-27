import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserImageDto } from 'src/app/models/addUserImageDto';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { FileService } from 'src/app/services/file.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userimage',
  templateUrl: './userimage.component.html',
  styleUrls: ['./userimage.component.css'],
})
export class UserimageComponent implements OnInit {
  @Input() imagePath: string;
  imageUrl: string;
  file: File;
  status:boolean
  currentUser: UserModel;
  constructor(
    private fileService: FileService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getBaseUrl();
  }

  async getBaseUrl() {
    await this.fileService
      .getBaseUrl()
      .then((response) => (this.imageUrl = response.url + this.imagePath));
  }

  async deleteImage() {
    await this.userService.deleteImage(this.authService.getCurrentUserId);
  }

  async onFileSelected(event) {
    this.file = event.target.files[0];
  }

  async upload() {
    let currentUserId = this.authService.getCurrentUserId;
    await this.userService.uploadImage({ id: currentUserId, formFile: this.file });
  }
}
