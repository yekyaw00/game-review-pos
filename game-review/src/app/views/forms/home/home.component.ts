import { Component, OnInit } from '@angular/core';
import { GameReview } from '../../../dto/GameReview';
import { GameReviewService } from '../../service/review.service';
import { searchChange } from '../../../common/common-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentPageNumber = 1;
  itemsPerPage = 6;
  gameReview: GameReview[];
  searchContent: string;

  constructor(private gameReviewService: GameReviewService) { }

  ngOnInit(): void {
    this.gameReviewService.findAll().subscribe(gameReview => this.gameReview = gameReview)
    searchChange.subscribe(data => this.searchContent=data)
  }

}
