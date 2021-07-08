import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {
  public selectedCategory = null;

  constructor(private repository: ProductRepository) {
  }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}