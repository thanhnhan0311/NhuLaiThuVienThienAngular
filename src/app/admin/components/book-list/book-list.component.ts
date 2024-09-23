import { Component } from '@angular/core';
import { BookDto } from '../../interface/response';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../../user/services/firebase.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books: BookDto[]

  constructor(private _bookService: BookService,private _firebaseSerivce:FirebaseService) { }

  ngOnInit() {
    this.GetAllBookForAdmin()
  }

  GetAllBookForAdmin() {
    this._bookService.GetAllBookForAdmin().subscribe
      ((res) => {
        this.books = res
        console.log(res)
      }, err => {
        console.log(err)
      })     
  }
  
  GetImageFirebaseUrl(imageName: string):string{    
    return this._firebaseSerivce.GetImageFirebaseUrl(imageName);
  }
}
