import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stripHtmlTag'
})

export class StripHtmlTagPipe implements PipeTransform {
    transform(value: string): any {
        return value.replace(/<.*?>/g, ''); // replace tags
    }
}