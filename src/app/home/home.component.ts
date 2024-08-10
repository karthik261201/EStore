import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/products/products.storeItem';
import { SearchKeyword } from './types/searchKeyword.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  onSelectSubCategory(subCategoryId: number) {
    this.productsStoreItem.loadProducts('subcategoryid='+subCategoryId);
  }

  onSelectCategory(categoryId: number) {
    this.productsStoreItem.loadProducts('maincategoryid='+categoryId);
  }
  
  onSearchKeyword(searchKeyword: SearchKeyword) {
    this.productsStoreItem.loadProducts('maincategoryid='+searchKeyword.categoryId+'&keyword='+searchKeyword.keyword);
  }
}
