import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
}

 
}
