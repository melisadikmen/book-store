import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() bookList: BookModel[] = [];
  @Output() addCart = new EventEmitter<BookModel>();
  faStar = faStar;
  addToCart(book: BookModel) {
    this.addCart.emit(book);
  }
}
