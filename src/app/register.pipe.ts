import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'register'
})
export class RegisterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
