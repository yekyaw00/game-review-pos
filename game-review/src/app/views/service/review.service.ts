import { Injectable } from '@angular/core';
import { BaseService } from '../../common/base.service';
import { GAMEREVIEW_API } from '../../common/base-api';
import { GameReview } from '../../dto/GameReview';

@Injectable({
    providedIn: 'root'
})

export class GameReviewService extends BaseService<GameReview>{

    protected url(): string {
        return GAMEREVIEW_API;
    }

    findBy(id){
        return this.http.get<GameReview[]>(this.url(),{
            params: {id}
        })
    }

    
    
}