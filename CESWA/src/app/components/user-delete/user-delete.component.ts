import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent {
  @Input() id: number;
  constructor(private userService: UserService) {}

  async delete() {
    console.log(this.id);
    await this.userService.deleteById(this.id);
    console.log(this.id);
  }
}
