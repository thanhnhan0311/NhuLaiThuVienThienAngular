import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookDto } from '../../interface/response';
import { environment } from '../../../../environments/environment.development';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {
  bookCreateFormData: FormData;
  bookCreateFormGroup: FormGroup;
  fileImage: File;
  apiUrl: string = environment.apiUrl;
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.bookCreateFormGroup = new FormGroup({
      book_name: new FormControl('', Validators.required),
      book_author: new FormControl('', Validators.required),
      book_category: new FormControl('', Validators.required),
      book_description: new FormControl('', Validators.required),
      file_image: new FormControl(null, Validators.required)
    })
  }




  PostBook() {
    console.log(this.bookCreateFormGroup.value)

    this.bookCreateFormData = new FormData()
    this.bookCreateFormData.append("book.book_name", this.bookCreateFormGroup.get('book_name').value)
    this.bookCreateFormData.append("book.book_author", this.bookCreateFormGroup.get('book_author').value)
    this.bookCreateFormData.append("book.book_category", this.bookCreateFormGroup.get('book_category').value)
    this.bookCreateFormData.append("book.book_description", this.bookCreateFormGroup.get('book_description').value)
    this.bookCreateFormData.append("book.book_image", "ha")
    this.bookCreateFormData.append("fileImage", this.fileImage)

    this._bookService.CreateBookForAdmin(this.bookCreateFormData)
      .subscribe((res) => {
        console.log(res)
      }, err => {
        console.log(err)
      })
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileImage = input.files[0];
    }
  }
}
