import { StoreItem } from "src/app/shared/storeItem";
import { Product } from "../../types/products.type";
import { ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsStoreItem extends StoreItem<Product[]> {
    constructor(private productService: ProductsService) {
        super([]);
    }

    async loadProducts() {
        this.productService.getAllProducts().subscribe(products => {
            this.setValue(products);
        })
    }

    get products$(): Observable<Product[]> {
        return this.value$
    }

    
}