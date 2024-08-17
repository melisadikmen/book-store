import { Component } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';
import { BookService } from '../book.service';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [MatButtonModule,FontAwesomeModule,MatIconModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  faStar = faStar;
  cartList : BookModel[]  = [];

  constructor( private _bookService: BookService,  private router: Router) { }

  ngOnInit() {
    this.cartList = this._bookService.getCart();
   
  }
  removeFromCart(event: BookModel) {
    this.cartList = this.cartList.filter((item: BookModel) => item.id !== event.id);
    this._bookService.addCart(this.cartList);
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }
}
