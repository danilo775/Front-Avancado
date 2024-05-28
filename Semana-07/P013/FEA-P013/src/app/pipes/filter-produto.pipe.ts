import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduto'
})
export class FilterProdutoPipe implements PipeTransform {

  transform(items: any[], searchText: string, column: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (column) {
        const value = item[column];
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return value.toString().toLowerCase().includes(searchText);
        }
      } else {
        return Object.values(item).some(value => {
          if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            return value.toString().toLowerCase().includes(searchText);
          }
          return false;
        });
      }
      return false;
    });
  }
}
