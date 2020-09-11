import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GraphicCardService } from '../../service/graphic-card.service';
import { ImageUploadService } from '../../service/uploadService.service';

@Component({
  selector: 'app-graphic-card-form',
  templateUrl: './graphic-card-form.component.html',
  styleUrls: ['./graphic-card-form.component.css']
})
export class GraphicCardFormComponent implements OnInit {

  quarter: string[]= ['Quarter1', 'Quarter2', 'Quarter3', 'Quarter4'];
  chipsetBrand: string[]=['AMD', 'NVIDIA'];
  fanType: string[]=['SINGLE','DUAL','TRIPLE'];
  image: string[] = [];
  graphicCardForm: FormGroup;

  constructor( private fb: FormBuilder, private router: Router, private uploadService: ImageUploadService,
    private graphicardService: GraphicCardService ) {}

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.graphicCardForm = this.fb.group({
      title: '',
      year: '',
      quarter: '',
      chipsetBrand: '',
      productBrand: '',
      ramType: '',
      fanType: '',
      price: '',
      totalPorts: '',
      aboutItem: ''
    })
  }
  
    private readFile(file: File) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => this.image.push(reader.result as string);
    }
  
    save(files: File[]){
      this.uploadService.upload(...files)
        .pipe(switchMap(image => {
          let gc = this.graphicCardForm.value;
          gc.image = image;
          return this.graphicardService.save(gc)
        })).subscribe(data => this.router.navigate(['/graphic-card']))
    }

    cancel(){
      this.graphicCardForm.reset();
    }

}
