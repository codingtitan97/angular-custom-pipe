import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertLetter',
  pure: true
})
export class ConvertLetterPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toUpperCase();
  }

}
