import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookDto } from '../../interface/response';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  public books : BookDto[] = []
  constructor(private _bookService: BookService,private _firebaseService: FirebaseService){    
  }

  ngOnInit(){
    this.GetAllBook();
  }


  GetAllBook(){
    this._bookService.GetAllBook().subscribe((res) =>{
      console.log(res)
     this.books = res;
    },err =>{
      console.log(err)
    })
  }  
  GetImageFirebaseUrl(fileName: string):string{
    console.log(fileName)
    return this._firebaseService.GetImageFirebaseUrl(fileName);
  }

  // GetFirebaseImageUrl(fileName: string) {
  //   const fileNameTest = "1aab094e-53be-4594-b829-84086820d0d6.jpg"
  //   const url = `https://firebasestorage.googleapis.com/v0/b/techwizwebapp.appspot.com/o/Images%2F${fileNameTest}?alt=media&token=96ce3d26-1f12-40cf-a9d0-e355b0f238f7`
  //   return url
  // }
}
