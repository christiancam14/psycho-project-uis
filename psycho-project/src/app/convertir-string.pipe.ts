import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirStringPipe'
})
export class ConvertirStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
