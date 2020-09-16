import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameReviewService } from '../../service/review.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})

export class PaginationComponent implements OnInit {
  currentPageNumber = 1;
  itemsPerPage = 5;
  review$: Observable<any[]>;

  constructor(private gameReviewService: GameReviewService) { }

  ngOnInit() {
    this.review$ = this.gameReviewService.findAll();
}

 
}
