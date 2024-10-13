import { Injectable } from '@angular/core';
import { DiamondModel } from './Shared/Diamond.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: DiamondModel[] = [];
  constructor() {}

  getDiamonds() {
    return this.cartItems;
  }

  onAddToCart(incommingDiamond: DiamondModel) {
    const existingDiamond = this.cartItems.find((diamond) => {
      return diamond === incommingDiamond;
    });
    if (!existingDiamond) {
      this.cartItems.push(incommingDiamond);
    } else {
      existingDiamond.gtty++;
    }

    console.log(this.cartItems);
  }
  getTotal(): number {
    let total = 0;
    this.cartItems.forEach((ele) => {
      if (ele && ele.price) {
        total += ele.gtty * ele.price;
      }
    });
    return total;
  }
  getFinalTotal(): {
    total: number;
    service: number;
    discount: number;
    finalTotal: number;
  } {
    const total = this.getTotal();
    const service = total * 0.1;
    let discount = 0;

    if (total > 40) {
      discount = (total + service) * 0.15;
    }

    const finalTotal = total + service - discount;
    return { total, service, discount, finalTotal };
  }
}
