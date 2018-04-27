import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordBreak'
})
export class WordBreakPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 50) {
      value = value.substring(0, 100) + '...';
    }
    return value;
  }

}
