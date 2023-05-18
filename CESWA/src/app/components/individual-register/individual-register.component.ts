import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './individual-register.component.html',
  styleUrls: ['./individual-register.component.css']
})
export class IndividualRegisterComponent implements OnInit{
  
  registerForm: FormGroup;
  constructor(
    private authService: AuthService,

    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      imagePath:["",]
    });
  }

  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.registerIndividual(registerModel).subscribe(
        (response) => {
          this.toastrService.show('başarıyla tamamlandı.', 'KAYIT');
        },
        (responseError) => {
          this.toastrService.error(responseError.error.messagge);
        }
      );
    } else {
      this.toastrService.error('Form hatalı', 'HATA!!!');
    }
  }

}
