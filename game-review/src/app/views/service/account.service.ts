import { BaseService } from '../../common/base.service';
import { ACCOUNT_API } from '../../common/base-api';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AccountService extends BaseService<Account>{
    
    protected url(): string {
        return ACCOUNT_API;
    }

}