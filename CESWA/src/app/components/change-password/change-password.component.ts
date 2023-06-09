import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.createChangePasswordForm();
  }

  createChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordAgain: ['', Validators.required],
    });
  }

  changePassword() {
    if (this.changePasswordForm.valid) {
      let updatePasswordDto = Object.assign(
        { id: this.authService.getCurrentUserId },
        this.changePasswordForm.value
      );
      updatePasswordDto.id = Number.parseInt(updatePasswordDto.id);
      this.userService.changePassword(updatePasswordDto);
    } else {
      this.toastrService.error('Form Eksik');
    }
  }
}
