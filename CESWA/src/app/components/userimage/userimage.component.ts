import { Component, Input, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-userimage',
  templateUrl: './userimage.component.html',
  styleUrls: ['./userimage.component.css'],
})
export class UserimageComponent implements OnInit {
  @Input() imagePath: string;
  imageUrl: string;
  constructor(private fileService: FileService) {}

  async ngOnInit(): Promise<void> {
    await this.getBaseUrl();
  }

  async getBaseUrl() {
    await this.fileService
      .getBaseUrl()
      .then((response) => (this.imageUrl = response.url + this.imagePath));
  }
}
