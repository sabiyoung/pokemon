import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'objectList'
})
export class ObjectListPipe implements PipeTransform {

  transform(value: Observable<any>, ...args: unknown[]):Observable<any> {
    return value
  }

}
