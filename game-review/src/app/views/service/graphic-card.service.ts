import { Injectable } from '@angular/core';
import { BaseService } from '../../common/base.service';
import { GraphicCard } from '../../dto/GraphicCard';
import { GRAPHICCARD_API } from '../../common/base-api';

@Injectable({
    providedIn: 'root'
})

export class GraphicCardService extends BaseService<GraphicCard>{

    protected url(): string {
        return GRAPHICCARD_API;
    }

    findBy(id){
        return this.http.get<GraphicCard[]>(this.url(),{
            params: {id}
        })
    }
    
}