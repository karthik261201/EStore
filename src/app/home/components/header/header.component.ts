import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { CartStoreItem } from '../../services/cart/cart.storeitem';
import { filter, Subscription } from 'rxjs';
import { UserService } from '../../services/users/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{
  subscription: Subscription = new Subscription();
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  @Output() searchClicked: EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>(); 

  displaySearch: boolean = true;
  isUserAuthenticated: boolean = false;
  userName: string = '';

  constructor( 
    public categoryStore: CategoriesStoreItem, 
    private router: Router, 
    public cartStore: CartStoreItem,
    public userSerive: UserService
  ) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(event => {
      this.displaySearch = (event as NavigationEnd).url === '/home/products' ? true : false;
    })

    this.subscription.add(
      this.userSerive.isUserAuthenticated$.subscribe((result) => {
        this.isUserAuthenticated = result
      })
    )

    this.subscription.add(
      this.userSerive.loggedInUser$.subscribe((result) => {
        this.userName = result.firstName;
      })
    )
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

  logout() {
    this.userSerive.logout();
    this.router.navigate(['home/products'])
  }

  pastOrders() {
    this.router.navigate(['home/pastorders'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
