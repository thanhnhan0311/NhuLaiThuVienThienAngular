import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BodyComponent } from '../../components/body/body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
