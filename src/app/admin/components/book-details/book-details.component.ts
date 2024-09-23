import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditorModule } from 'primeng/editor';
import { BookDto, ChapterDto } from '../../interface/response';
import { BookService } from '../../services/book.service';
import { FirebaseService } from '../../../user/services/firebase.service';
import { FileService } from '../../services/file.service';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, EditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  
  book: BookDto;
  bookId: number;
  bookUpdateFormGroup: FormGroup
  bookUpdateFormData: FormData;
  chapterEdit: ChapterDto = { chapter_id: 0, chapter_name: "", chapter_content: "", isEditing: false };
  fileImage: File;
  constructor(private route: ActivatedRoute,
    private _bookService: BookService,
    private _firebaseService: FirebaseService,
    private _fileService: FileService
  ) { }

  ngOnInit() {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.GetDetailsBook()

    this.bookUpdateFormGroup = new FormGroup({
      book_name: new FormControl('', Validators.required),
      book_author: new FormControl('', Validators.required),
      book_category: new FormControl('', Validators.required),
      book_description: new FormControl('', Validators.required),
      file_image: new FormControl(null, Validators.required)
    })


  }

  GetDetailsBook() {
    this._bookService.GetDetailsBookForAdmin(this.bookId)
      .subscribe((res) => {
        this.book = res                   
        this.chapterEdit.chapter_content = this.book.chapters[0]?.chapter_content
        this.bookUpdateFormGroup.patchValue({
          book_name: res.book_name,
          book_author: res.book_author,
          book_category: res.book_category,
          book_description: res.book_description
        })
      }, err => {
        console.log(err)
      });
  }

  GetFirebaseUrl(fileName: string): string {
    return this._firebaseService.GetImageFirebaseUrl(fileName)
  }

  AddNewChapter() {
    const newChapter: ChapterDto = { chapter_id: 0, chapter_name: "Edit New Name", chapter_content: "New Content", isEditing: false }
    this.book.chapters.push(newChapter)
  }

  ToggleDeleteChapter(chapter: ChapterDto) {
    this.book.chapters = this.book.chapters.filter(c => c != chapter);
  }

  ToggleEdit(chapter: ChapterDto) {
    if (chapter.isEditing == undefined || false) {
      chapter.isEditing = true;
      return;
    }
    chapter.isEditing = !chapter.isEditing
  }
  ToggleEditContent(chapter: ChapterDto) {
    this.chapterEdit = chapter;
    console.log(this.chapterEdit)
    
    console.log(this.book);
  }

  PutBook() {

    // console.log(this.bookUpdateFormGroup.get("book_name").value)
    this.bookUpdateFormData = new FormData();
    this.bookUpdateFormData.append("bookUpdate.book_id", this.book.book_id.toString());
    this.bookUpdateFormData.append("bookUpdate.book_name", this.bookUpdateFormGroup.get("book_name").value);
    this.bookUpdateFormData.append("bookUpdate.book_image", this.book.book_image);
    this.bookUpdateFormData.append("bookUpdate.book_author", this.bookUpdateFormGroup.get("book_author").value);
    this.bookUpdateFormData.append("bookUpdate.book_category", this.bookUpdateFormGroup.get("book_category").value);
    this.bookUpdateFormData.append("bookUpdate.book_description", this.bookUpdateFormGroup.get("book_description").value);

    this.book.chapters.forEach((chapter, index) => {
      this.bookUpdateFormData.append(`bookUpdate.chapters[${index}].chapter_id`, chapter.chapter_id.toString());
      this.bookUpdateFormData.append(`bookUpdate.chapters[${index}].chapter_name`, chapter.chapter_name);
      this.bookUpdateFormData.append(`bookUpdate.chapters[${index}].chapter_content`, chapter.chapter_content);
    });

    this._bookService.PutBookForAdmin(this.bookUpdateFormData).subscribe((res) => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
}
