import { Component, OnInit } from '@angular/core';
import { GameReviewService } from '../../service/review.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GameReview } from '../../../dto/GameReview';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css'],
})
export class ReviewDetailComponent implements OnInit {
  
  gameReview: GameReview;

  constructor(
    private gameReviewService: GameReviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          let id = params['id'];
          return this.gameReviewService.findById(+id);
        })
      )
      .subscribe(gameReview => this.gameReview = gameReview);
  }
}
