import { Component } from '@angular/core';
import { DiamondModel } from '../Shared/Diamond.model';
import { ActivatedRoute } from '@angular/router';
import { DIAMOND_ORDER } from '../diamond';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  diamond: DiamondModel;
  constructor(private route: ActivatedRoute, private cartservice: CartService) {
    let id: number = parseInt(this.route.snapshot.params['id']);
    this.diamond = DIAMOND_ORDER[id];
    console.log(this.diamond);
  }
  addToCart() {
    this.cartservice.onAddToCart(this.diamond);
  }
}
