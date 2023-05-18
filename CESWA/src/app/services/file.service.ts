import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = `${environment.apiUrl}File/`;
  async getBaseUrl() {
    let newPath = this.apiUrl + 'GetBaseUrl';
    let observable: Observable<{url:string}> = this.httpClient.get<{ url: string }>(newPath);
    return await firstValueFrom(observable)
  }
}
