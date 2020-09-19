import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class CommonPipe implements PipeTransform {
   
    transform(value: any, key: string, searchValue: string) {
        if(!searchValue){
            return value;
        }
        return value?.filter(data => data[key].toUpperCase().includes(searchValue.toUpperCase()))
    }
    
} 