import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsComponent } from './components/news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// 7861c581307049b89707b219c809fd8c
// pub_760103d6e5022270fc0ffbf54d99c790a5344
export class AppComponent {
  title = 'News App';
}
