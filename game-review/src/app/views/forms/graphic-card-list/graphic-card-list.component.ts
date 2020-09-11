import { Component, OnInit } from '@angular/core';
import { GraphicCardService } from '../../service/graphic-card.service';
import { GraphicCard } from 'src/app/dto/GraphicCard';

@Component({
  selector: 'app-graphic-card-list',
  templateUrl: './graphic-card-list.component.html',
  styleUrls: ['./graphic-card-list.component.css']
})
export class GraphicCardListComponent implements OnInit {

  graphicCards: GraphicCard[];

  constructor( private graphicCardService: GraphicCardService) { }

  ngOnInit(): void {
    this.graphicCardService.findAll().subscribe(
      graphicCards => this.graphicCards = graphicCards
    )
  }

}
