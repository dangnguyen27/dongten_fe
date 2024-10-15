import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatDate'})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, showTime = false): string {
    let results = '';
    if(value) {
      const arrayDateTime = value.split("T");
      results = (showTime ? arrayDateTime[1].slice(0,8) + " " : "") + arrayDateTime[0].split("-").reverse().join("/");
    }
    return results;
  }
}