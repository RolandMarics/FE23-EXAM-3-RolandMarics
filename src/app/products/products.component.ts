import { Component } from '@angular/core';
import { DiamondModel } from '../Shared/Diamond.model';
import { DIAMOND_ORDER } from '../diamond';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  diamonds: DiamondModel[] = DIAMOND_ORDER;

  diamond: DiamondModel;
  constructor(private route: ActivatedRoute, private cartservice: CartService) {
    let id: number = parseInt(this.route.snapshot.params['id']);
    this.diamond = DIAMOND_ORDER[id];
  }

  addToCart() {
    this.cartservice.onAddToCart(this.diamond);
  }
}
