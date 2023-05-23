import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-corporate-register',
  templateUrl: './corporate-register.component.html',
  styleUrls: ['./corporate-register.component.css'],
})
export class CorporateRegisterComponent implements OnInit {
  corporateRegisterForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createCorporateRegisterForm();
  }

  createCorporateRegisterForm() {
    this.corporateRegisterForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  corporateRegister() {
    if (this.corporateRegisterForm.valid) {
      let registerModel = Object.assign({}, this.corporateRegisterForm.value);
      this.authService.registerCorporate(registerModel).subscribe(
        (response) => {
          this.toastrService.success('başarıyla tamamlandı.', 'KAYIT');
        },
        (responseError) => {
          this.toastrService.error(responseError.error.messagge);
        }
      );
    }
  }
}
