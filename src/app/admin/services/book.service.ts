import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BookDto } from '../interface/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApiUrl = `${environment.apiUrl}/Book`
  constructor(private _http : HttpClient) { }

  GetAllBookForAdmin():Observable<BookDto[]>{
    return this._http.get<BookDto[]>(this.bookApiUrl);
  }

  CreateBookForAdmin(bookFormData : FormData):Observable<any>{
      return this._http.post(this.bookApiUrl,bookFormData);
  }  
}
