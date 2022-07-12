import { Pipe, PipeTransform } from '@angular/core';
import { Area } from '../interface/interfacediseño';

@Pipe({
  name: 'pipeFilterkey',
})
export class PipeFilterkeyPipe implements PipeTransform {
  transform(value: any[], path: any): any[] {
    console.log(path);
    return value.filter((e) => e.Area.name === path);
  }
}
