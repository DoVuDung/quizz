import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatVNMoney' })
export class VnMoney implements PipeTransform {
    transform(value: any): string {
        return new Intl.NumberFormat().format(value);
    }
}

@Pipe({ name: 'fullName' })
export class FullName implements PipeTransform {
    transform(value: any): string {
        return value.split('-')[1];
    }
}