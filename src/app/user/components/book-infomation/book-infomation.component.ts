import { Component } from '@angular/core';
import { BookChaptersComponent } from '../book-chapters/book-chapters.component';

@Component({
  selector: 'app-book-infomation',
  standalone: true,
  imports: [BookChaptersComponent],
  templateUrl: './book-infomation.component.html',
  styleUrl: './book-infomation.component.scss'
})
export class BookInfomationComponent {

}
