import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getJsonValue'})
export class GetJsonValuePipe implements PipeTransform {
  transform(value: string, key: string): string {
    if(!value) {
        return '';
      }
      try {
        const obj = JSON.parse(value);
        return obj[key] ? obj[key] : null;
      } catch (error) {
        return '';
      }
  }
}