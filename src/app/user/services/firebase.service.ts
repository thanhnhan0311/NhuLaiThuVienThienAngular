import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseUrl = environment.apiFirebaseUrl;
  constructor() { }

  GetImageFirebaseUrl(fileName: string): string {
    const url = `${this.firebaseUrl}/Images%2F${fileName}?alt=media&token=98beb828-aeba-44db-9ab6-f58940ee5757`
    return url;
  } 

}
