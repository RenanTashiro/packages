import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  Comparator,
  List,
  pullAllWith,
} from 'lodash';

@Pipe({
  name: 'pullAllWith',
})
export class PullAllWithPipe implements PipeTransform {

  transform<T> (
    array: T[],
    values?: List<T>,
    comparator?: Comparator<T>,
  ): T[] {
    const array4PullAllWith = [...array];

    return pullAllWith(array4PullAllWith, values, comparator);
  }

}