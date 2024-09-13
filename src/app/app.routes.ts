import { Routes } from '@angular/router';
import { BookDetailComponent } from './user/pages/book-detail/book-detail.component';
import { HomeComponent } from './user/pages/home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"book",component:BookDetailComponent}
];
