import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';

@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.scss']
})
export class CatnavigationComponent {
  subscriptions: Subscription = new Subscription(); 

  constructor(public categoryStore : CategoriesStoreItem) {}

}
