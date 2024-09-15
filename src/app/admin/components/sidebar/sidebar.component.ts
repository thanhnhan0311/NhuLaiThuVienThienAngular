import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBomb, faHeart, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChildren('optionList') optionsList: QueryList<ElementRef>;
  faRocket = faRocket
  faBomb = faBomb
  faHeart = faHeart

  optionsListProperties = [
    {
      name: "Dashboard", icon: faRocket, 
      chidlist:
       [
        { name: "Book List", url: "/admin/book-list" },
        { name: "Chapter List", url: "/" },
        { name: "CategoryList", url: "/" }
       ]        
    },
    {
      name: "Create", icon: faBomb,
      chidlist: [
        { name: "Create Book", url: "/admin/create-book" },
        { name: "Create Book", url: "" },
        { name: "Create Book", url: "" }
      ]
    }  
  ]

  constructor() {

  }

  ngOnInit() {
    this.optionsList = new QueryList<ElementRef>();
  }

  test(index: number) {
    const elementArray = this.optionsList.toArray();
    const currentElements = elementArray[index].nativeElement.querySelectorAll('.child-list');
    currentElements.forEach((element: HTMLElement) => {
      if (element.classList.contains('open')) {
        element.classList.remove('open');
      } else {
        element.classList.add('open');
      }
    });
  }

}
