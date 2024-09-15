import { Routes } from '@angular/router';
import { BookDetailComponent } from './user/pages/book-detail/book-detail.component';
import { HomeComponent as UserHomeComponent } from './user/pages/home/home.component';
import { HomeComponent as AdminHomeComponent } from './admin/pages/home/home.component';
import { BookListComponent } from './admin/components/book-list/book-list.component';
import { CreateBookComponent } from './admin/components/create-book/create-book.component';
export const routes: Routes = [
    { path: "", component: UserHomeComponent },
    { path: "book", component: BookDetailComponent },
    {
        path: "admin", component: AdminHomeComponent, children: [
            {path:"book-list",component:BookListComponent},
            {path:"create-book",component:CreateBookComponent}
        ]
    }
];
