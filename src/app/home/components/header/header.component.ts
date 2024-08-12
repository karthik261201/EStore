import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { CartStoreItem } from '../../services/cart/cart.storeitem';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  @Output() searchClicked: EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>(); 

  displaySearch: boolean = true;

  constructor( public categoryStore: CategoriesStoreItem, private router: Router, public cartStore: CartStoreItem) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(event => {
      this.displaySearch = (event as NavigationEnd).url === '/home/products' ? true : false;
    })
  }

  onClickSearch(keyword: string, categoryId: string) {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword
    })
  }

  navigateToCart() {
    this.router.navigate(['home/cart']);
  }

}
