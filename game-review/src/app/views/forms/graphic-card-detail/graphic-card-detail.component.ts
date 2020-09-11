import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GraphicCard } from 'src/app/dto/GraphicCard';
import { GraphicCardService } from '../../service/graphic-card.service';
import { ShoppingCart } from '../../../dto/ShoppingCart';

@Component({
  selector: 'app-graphic-card-detail',
  templateUrl: './graphic-card-detail.component.html',
  styleUrls: ['./graphic-card-detail.component.css']
})
export class GraphicCardDetailComponent implements OnInit {

  graphicCards: GraphicCard;

  constructor(private route: ActivatedRoute, private graphicCardService: GraphicCardService, 
    private shoppingCart: ShoppingCart, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(
        (params: Params) => {
          let id = params['id'];
          return this.graphicCardService.findById(+id)
        }
      )
    ).subscribe(
      graphicCard => this.graphicCards = graphicCard
    )
  }

  addToCart(graphicCard: GraphicCard){
    this.shoppingCart.addToCart(graphicCard)
    this.router.navigate(['/graphic-card']);
  }

}
