import { Component, OnInit } from '@angular/core';
import { GameReview } from '../../../dto/GameReview';
import { GameReviewService } from '../../service/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;
  gameReview: GameReview[];

  constructor(private gameReviewService: GameReviewService) { }

  ngOnInit(): void {
    this.gameReviewService.findAll().subscribe(gameReview => this.gameReview = gameReview)
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
} 
}
