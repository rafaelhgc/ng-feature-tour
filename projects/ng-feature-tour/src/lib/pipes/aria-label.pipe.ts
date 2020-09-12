import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'aria-label' })
export class AriaLabelPipe implements PipeTransform {
  transform(label: string, total: number, index: number): string {
    index = index + 1;

    return label
      .replace('{total}', total.toString())
      .replace('{index}', index.toString());
  }
}
