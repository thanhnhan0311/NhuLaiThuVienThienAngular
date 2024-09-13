import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BookInfomationComponent } from '../../components/book-infomation/book-infomation.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [HeaderComponent,BookInfomationComponent],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {

}
