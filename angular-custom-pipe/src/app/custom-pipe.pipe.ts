import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeVowel'
})
export class removeVowel implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/[aeiou]/gi, '');
  }
  
}