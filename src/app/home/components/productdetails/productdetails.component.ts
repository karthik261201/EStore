import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/products.type';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit,OnDestroy  {
  product: Product;
  subscription: Subscription = new Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscription.add(
      this.productsService.getProducts(id).subscribe(product => {
        this.product = product[0];
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
