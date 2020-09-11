import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EditorChangeSelection } from 'ngx-quill';
import { EditorChangeContent } from 'ngx-quill';
import { ImageUploadService } from '../../service/uploadService.service';
import { GameReviewService } from '../../service/review.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  
  mode: string[] = ['SINGLE_PLAYER','MULTIPLAYER','CO_OPERATIVE'];
  cardPhoto: string[] = [] ;
  reviewForm: FormGroup;

  constructor(private uploadService: ImageUploadService, private gameReviewService: GameReviewService,
    private router: Router, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.reviewForm = this.fb.group({
      title: '',
      releasedDate: '',
      genre: '',
      mode: '',
      platform: '',
      gameEngine: '',
      publishedCompany: '',
      aboutGame: '',
      minimumRequirement: '',
      maximumRequirement: ''
    })
  }

  // editorStyle = {
  //   height: '300px',
  // };

  // changedEditor(event: EditorChangeContent | EditorChangeSelection) {
  //   this.editorText= event['editor']['root']['innerHTML'];
  // } 

  private readFile(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => this.cardPhoto.push(reader.result as string);
  }
  save(files: File[]){
     
    this.uploadService.upload(...files)
      .pipe(switchMap(photos => {
        let review = this.reviewForm.value;
        review.cardPhoto = photos;
        return this.gameReviewService.save(review)
      })).subscribe(data => this.router.navigate(['/home']))
  }

  cancel(){
    this.reviewForm.reset();
  }

}
