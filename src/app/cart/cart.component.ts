import { Component, OnInit } from '@angular/core';
import { DiamondModel } from '../Shared/Diamond.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  diamondsFromCart: DiamondModel[];

  total: number = 0;
  serviceFee: number = 0;
  discount: number = 0;
  finalTotal: number = 0;
  constructor(private cartService: CartService) {
    this.diamondsFromCart = cartService.getDiamonds();
    console.log(this.diamondsFromCart);
    this.total = cartService.getTotal();
  }
  ngOnInit(): void {
    this.updateTotals();
  }

  updateTotals() {
    const { total, service, discount, finalTotal } =
      this.cartService.getFinalTotal();
    this.total = total;
    this.serviceFee = service;
    this.discount = discount;
    this.finalTotal = finalTotal;
  }
}
