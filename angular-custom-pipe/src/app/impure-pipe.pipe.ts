import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ImpurePipePipe',
  pure: false
})
export class ImpurePipePipe implements PipeTransform {
  transform(values: number[]): number[] {
    return values.filter(value => value % 2 === 0);
  }
}