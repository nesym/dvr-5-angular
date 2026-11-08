import { Pipe, PipeTransform } from '@angular/core';
import { Gamer } from './model/gamer.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Gamer[], filterText: string): Gamer[] {
    if (!list) return [];
    if (!filterText) return list;
    return list.filter(item =>
      item.pseudoGamer?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}