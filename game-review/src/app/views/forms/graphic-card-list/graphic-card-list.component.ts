import { Component, OnInit } from '@angular/core';
import { GraphicCardService } from '../../service/graphic-card.service';
import { GraphicCard } from 'src/app/dto/GraphicCard';
import { searchChange } from '../../../common/common-util';

@Component({
  selector: 'app-graphic-card-list',
  templateUrl: './graphic-card-list.component.html',
  styleUrls: ['./graphic-card-list.component.css']
})
export class GraphicCardListComponent implements OnInit {

  graphicCards: GraphicCard[];
  searchContent: string;

  constructor( private graphicCardService: GraphicCardService) { }

  ngOnInit(): void {
    this.graphicCardService.findAll().subscribe(
      graphicCards => this.graphicCards = graphicCards) 
      searchChange.subscribe(data => this.searchContent=data)
  }

}
