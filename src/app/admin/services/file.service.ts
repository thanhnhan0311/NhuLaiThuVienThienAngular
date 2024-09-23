import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  onFileSelected(event: Event): File | null {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      return input[0]
    }
    return null;
  }
}
