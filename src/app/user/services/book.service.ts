import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BookDto } from '../interface/response';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApiUrl = `${environment.apiUrl}/Book`
  constructor(private _http : HttpClient) { }

  GetAllBook():Observable<BookDto[]>{
    return this._http.get<BookDto[]>(this.bookApiUrl);
  }

}
