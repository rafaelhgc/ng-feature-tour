import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paginationDescription' })
export class A11yPaginationDescriptionPipe implements PipeTransform {
  transform(description: string, total: number, index: number): string {
    index = index + 1;

    return description
      .replace(/{total}/g, total.toString())
      .replace(/{index}/g, index.toString());
  }
}
